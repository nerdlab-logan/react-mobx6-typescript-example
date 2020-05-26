class ShopItemModel {
  id: number
  title: string
  price: number

  constructor(id: number, title: string, price: number) {
    this.id = id
    this.title = title
    this.price = price
  }
}

export default ShopItemModel
