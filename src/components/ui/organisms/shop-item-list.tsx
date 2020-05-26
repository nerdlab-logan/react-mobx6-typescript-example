import React from 'react'
import ShopItemModel from '@/store/shop/model/shop-item.model'
import ShopItem from '@/components/ui/molecules/shop-item'
import { useObserver } from 'mobx-react'

interface Props {
  shopItemList: ShopItemModel[]
  onPut: (shopItem: ShopItemModel) => void
}

const ShopItemList = ({ shopItemList, onPut }: Props): React.ReactElement => {
  return useObserver(() => (
    <div>
      {shopItemList.map((item) => (
        <ShopItem key={item.id} item={item} onPut={onPut} />
      ))}
    </div>
  ))
}

export default ShopItemList
