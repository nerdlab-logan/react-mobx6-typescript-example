import { action, computed, observable } from 'mobx'
import BasketItemModel from '@/store/basket/model/basket-item.model'
import ShopItemModel from '@/store/shop/model/shop-item.model'

class BasketStore {
  @observable.shallow basketItemList: BasketItemModel[] = []

  @action
  put = (shopItem: ShopItemModel): void => {
    const basketItem = this.basketItemList.find((item) => item.shopItem.id === shopItem.id)
    if (!basketItem) {
      this.basketItemList.push(new BasketItemModel(shopItem))
      return
    }

    basketItem.count++
  }

  @action
  take = (itemId: number): void => {
    const basketItem = this.basketItemList.find((item) => item.shopItem.id === itemId)

    if (!basketItem) return

    if (basketItem.count === 1) {
      this.basketItemList = this.basketItemList.filter((item) => item.shopItem.id !== itemId)
      return
    }

    basketItem.count--
  }

  @computed
  get totalPrice(): number {
    return this.basketItemList.reduce<number>((sum, current) => {
      return sum + current.sumPrice
    }, 0)
  }

  @computed
  get totalCount(): number {
    return this.basketItemList.reduce<number>((sum, current) => {
      return sum + current.count
    }, 0)
  }

  @computed
  get basketItemCount(): number {
    return this.basketItemList.length
  }
}

export default BasketStore
