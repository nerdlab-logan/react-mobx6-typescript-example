import React from 'react'
import { useObserver } from 'mobx-react'
import './basket-item-list.css'

import BasketItemModel from '@/store/basket/model/basket-item.model'
import BasketItem from '@/components/ui/molecules/basket-item'
import BasketTotalPrice from '@/components/ui/molecules/basket-total-price'

interface Props {
  basketItemList: BasketItemModel[]
  basketItemCount: number
  totalPrice: number
  totalCount: number
  onTake: (itemId: number) => void
}

const BasketItemList = ({
  basketItemList,
  basketItemCount,
  totalCount,
  totalPrice,
  onTake,
}: Props): React.ReactElement => {
  return useObserver(() => (
    <div className="basket-item-container">
      {basketItemList.map((basket) => (
        <BasketItem key={basket.shopItem.id} basket={basket} onTake={onTake} />
      ))}
      <hr />
      <div className="basket-item-info">
        <div style={{ display: 'flex' }}>
          <p>
            <b>선택 상품수: </b> {basketItemCount}
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <p>
            <b>총 갯수: </b> {totalCount}
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <BasketTotalPrice totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  ))
}

export default BasketItemList
