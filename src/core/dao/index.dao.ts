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
  public async get(params: { url: string, data: Object, header?: object }): Promise<Object> {
    try {
      return await axios.get(params.url, {
        params: params.data,
        headers: Object.assign({}, params.header)
      });
    } catch (e) {
       throw new Error(`GET 请求出错：${e.message}`)
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
      throw new Error(`POST 请求出错：${e.message}`)
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
      throw new Error(`PUT 请求出错：${e.message}`)
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
      throw new Error(`DELETE 请求出错：${e.message}`)
    }
  }

  /**
   * 添加响应拦截器
   * @constructor
   */
  public async ResponseInterceptor(): Promise<any> {
    axios.interceptors.response.use(response => {
        return response.data;
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
      /**
       * 统一设置请求头
       */
      config.headers['bmy'] = "2020";
      return config
    }, function (error: Error) {
      return Promise.reject(error)
    })
  }

}