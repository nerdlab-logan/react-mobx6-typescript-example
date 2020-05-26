import React from 'react'
import './basket-item.css'
import BasketItemModel from '@/store/basket/model/basket-item.model'
import { useObserver } from 'mobx-react'

interface Props {
  basket: BasketItemModel
  onTake: (itemId: number) => void
}

const BasketItem = ({ basket, onTake }: Props): React.ReactElement => {
  return useObserver(() => (
    <div className="BasketItem">
      <div className="name">{basket.shopItem.title}</div>
      <div className="price">{basket.sumPrice}원</div>
      <div className="count">{basket.count}</div>
      <div className="return" onClick={() => onTake(basket.shopItem.id)}>
        갖다놓기
      </div>
    </div>
  ))
}

export default BasketItem
