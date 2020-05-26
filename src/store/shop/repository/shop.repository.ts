import ShopItemModel from '@/store/shop/model/shop-item.model'
import AppHttpClient from '@/api/http-client'
import { AxiosRequestConfig } from 'axios'

class ShopRepository extends AppHttpClient {
  private readonly URL = '/items'

  constructor(apiConfig: AxiosRequestConfig) {
    super(apiConfig)
  }

  findAllShopItem(): Promise<ShopItemModel[]> {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(
    //       this.get<ShopItemModel[]>(this.URL).then((response) => {
    //         return response.data
    //       }),
    //     )
    //   }, 1000)
    // })
    return this.get<ShopItemModel[]>(this.URL).then((response) => {
      return response.data
    })
  }
}

export default new ShopRepository({})
