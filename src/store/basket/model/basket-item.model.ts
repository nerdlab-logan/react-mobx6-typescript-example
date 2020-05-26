import { computed, observable } from 'mobx'
import ShopItemModel from '@/store/shop/model/shop-item.model'

class BasketItemModel {
  shopItem: ShopItemModel
  @observable count: number

  constructor(shopItem: ShopItemModel) {
    this.shopItem = shopItem
    this.count = 1
  }

  @computed
  get sumPrice(): number {
    return this.shopItem.price * this.count
  }
}

export default BasketItemModel
