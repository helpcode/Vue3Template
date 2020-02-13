import { Utils } from '../utils/index.utils';
import axios, { AxiosInstance } from 'axios';
import { Injectable } from 'vue3decorators';

@Injectable()
export class Axios {
  public constructor() {
    // 设置接口请求基地址
    axios.defaults.baseURL = Utils.CheckAjaxUrl();
    this.ResponseInterceptor();
    this.RequestInterceptor();
  }

  /**
   * Get 请求
   * 请求参数请参考接口：RequestParams
   * @param params
   */
  public async get(params: { url: string, data: Object }): Promise<Object> {
    try {
      return await axios.get(params.url, {params: params.data});
    } catch (e) {
      return e.message
    }
  }

  /**
   * Post 请求
   * 请求参数请参考接口：RequestParams
   * @param params
   */
  public async post(params: { url: string, data: Object, header?: Object }): Promise<Object> {
    try {
      return await axios.post(params.url, params.data, {
        headers: Object.assign({}, params.header)
      })
    } catch (e) {
      return e.message
    }
  }

  /**
   * Put 请求
   * 请求参数请参考接口：RequestParams
   * @param params
   */
  public async put(params: { url: string, data: Object }): Promise<Object> {
    try {
      return await axios.put(params.url, params.data)
    } catch (e) {
      return e.message
    }
  }

  /**
   * delete 请求
   * 请求参数请参考接口：RequestParams
   * @param params
   */
  public async delete(params: { url: string, data: Object }): Promise<Object> {
    try {
      return await axios.delete(params.url, {params: params.data})
    } catch (e) {
      return e.message
    }
  }

  /**
   * 添加响应拦截器
   * @constructor
   */
  public async ResponseInterceptor(): Promise<any> {
    axios.interceptors.response.use(response => {
        return response;
    }, (error: Error) => {
      return Promise.reject(error)
    })
  }

  /**
   * 添加请求拦截器
   * @constructor
   */
  public async RequestInterceptor(): Promise<any> {
    axios.interceptors.request.use(config => {
      return config
    }, function (error: Error) {
      return Promise.reject(error)
    })
  }

}