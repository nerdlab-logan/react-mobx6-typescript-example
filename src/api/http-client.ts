import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

export interface AppErrorData {
  code: string
  message: string
  timestamp: Date
  path: string
}

export interface AppErrorResponse {
  data: AppErrorData
  status: number
  statusText: string
}

export interface AppClientResponse<T> {
  data: T
}

function generateAxiosInstance(apiConfig: AxiosRequestConfig): AxiosInstance {
  return axios.create(apiConfig)
}

function generateFormDataAxiosInstance(apiConfig: AxiosRequestConfig): AxiosInstance {
  const formDataConfig = apiConfig

  formDataConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  return generateAxiosInstance(formDataConfig)
}

function createFormData(object: any): FormData {
  const formData: FormData = new FormData()

  Object.keys(object).forEach((key) => formData.append(key, object[key]))

  return formData
}

export default class AppHttpClient {
  private _apiConfig: AxiosRequestConfig
  private _AXIOS: AxiosInstance
  private _AXIOS_FORM: AxiosInstance

  constructor(apiConfig: AxiosRequestConfig) {
    this._apiConfig = { ...defaultConfig, ...apiConfig }
    this._AXIOS = generateAxiosInstance(this._apiConfig)
    this._AXIOS_FORM = generateFormDataAxiosInstance(this._apiConfig)

    this._AXIOS.interceptors.response.use(
      (response) => this.onResponseSuccess(response),
      (error) => this.onResponseError(error, this._AXIOS),
    )

    this._AXIOS_FORM.interceptors.response.use(
      (response) => this.onResponseSuccess(response),
      (error) => this.onResponseError(error, this._AXIOS_FORM),
    )
  }

  protected get<T, R = AppClientResponse<T>>(urlPath: string, params?: any): Promise<R> {
    return this._AXIOS.get(urlPath, { params })
  }

  protected post<T, R = AppClientResponse<T>>(urlPath: string, data?: any): Promise<R> {
    return this._AXIOS.post(urlPath, data)
  }

  protected put<T, R = AppClientResponse<T>>(urlPath: string, data?: any): Promise<R> {
    return this._AXIOS.put(urlPath, data)
  }

  protected patch<T, R = AppClientResponse<T>>(urlPath: string, data?: any): Promise<R> {
    return this._AXIOS.patch(urlPath, data)
  }

  protected delete<T, R = AppClientResponse<T>>(urlPath: string): Promise<R> {
    return this._AXIOS.delete(urlPath)
  }

  protected postFormData<T, R = AppClientResponse<T>>(urlPath: string, data: any): Promise<R> {
    return this._AXIOS_FORM.post(urlPath, createFormData(data))
  }

  private onResponseSuccess(response: AxiosResponse) {
    return response
  }

  private onResponseError(error: any, _axios: AxiosInstance) {
    alert(error)
    return Promise.reject(error)
  }
}
