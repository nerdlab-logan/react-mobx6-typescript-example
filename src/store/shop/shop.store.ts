import { action, computed, observable, runInAction } from 'mobx'
import ShopRepository from './repository/shop.repository'
import ShopItemModel from './model/shop-item.model'

class ShopStore {
  @observable.shallow shopItemList: ShopItemModel[] = []
  @observable pending = false

  @action
  fetchShopItemList = async () => {
    this.shopItemList = []
    this.pending = true
    try {
      const newShopItemList = await ShopRepository.findAllShopItem()

      runInAction(() => {
        this.shopItemList = newShopItemList
      })
    } finally {
      runInAction(() => {
        this.pending = false
      })
    }
  }

  @computed
  get shopItemListOrderByLowPrice() {
    return this.shopItemList.sort((a, b) => a.price - b.price)
  }
}

export default ShopStore
