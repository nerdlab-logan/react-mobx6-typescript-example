import React from 'react'
import './shop-item.css'
import ShopItemModel from '@/store/shop/model/shop-item.model'

interface Props {
  item: ShopItemModel
  onPut: (shopItem: ShopItemModel) => void
}

const ShopItem = ({ item, onPut }: Props): React.ReactElement => {
  return (
    <div
      className="ShopItem"
      onClick={() => {
        onPut(item)
      }}
    >
      <h4>{item.title}</h4>
      <div>{item.price}원</div>
    </div>
  )
}

export default ShopItem
