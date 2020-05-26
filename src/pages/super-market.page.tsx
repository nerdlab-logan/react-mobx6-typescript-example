import React, { useEffect } from 'react'
import { useObserver, useLocalStore } from 'mobx-react'
import IndexTemplate from '@/components/templates/index.template'
import ShopStore from '@/store/shop/shop.store'
import ShopItemList from '@/components/ui/organisms/shop-item-list'
import { useGlobalStore } from '@/hooks/use-global-stores'
import BasketItemList from '@/components/ui/organisms/basket-item-list'

const SuperMarketPage: React.FC = () => {
  const { basketStore } = useGlobalStore()
  const shopStore = useLocalStore<ShopStore>(() => new ShopStore())

  useEffect(() => {
    shopStore.fetchShopItemList()
  }, [])

  return useObserver(() => {
    return (
      <div>
        <IndexTemplate
          shopItemList={
            shopStore.pending ? (
              <div>메뉴 불러오는 중...</div>
            ) : (
              <ShopItemList shopItemList={shopStore.shopItemListOrderByLowPrice} onPut={basketStore.put} />
            )
          }
          basketItemList={
            <BasketItemList
              basketItemList={basketStore.basketItemList}
              basketItemCount={basketStore.basketItemCount}
              totalCount={basketStore.totalCount}
              totalPrice={basketStore.totalPrice}
              onTake={basketStore.take}
            />
          }
        />
      </div>
    )
  })
}

export default SuperMarketPage
