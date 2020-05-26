import React from 'react'
import { useObserver } from 'mobx-react'

interface Props {
  totalPrice: number
}

const BasketTotalPrice = ({ totalPrice }: Props): React.ReactElement => {
  return useObserver(() => {
    return (
      <p>
        <b>총합: </b> {totalPrice}원
      </p>
    )
  })
}

export default BasketTotalPrice
