import React from 'react'
import BasketStore from '@/store/basket/basket.store'

export const storesContext = React.createContext({
  basketStore: new BasketStore(),
})
