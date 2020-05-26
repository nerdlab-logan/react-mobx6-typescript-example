import React from 'react'
import './index-template.css'

interface Props {
  shopItemList: React.ReactElement
  basketItemList: React.ReactElement
}

const IndexTemplate = ({ shopItemList, basketItemList }: Props): React.ReactElement => {
  return (
    <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {shopItemList}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basketItemList}
      </div>
    </div>
  )
}

export default IndexTemplate
