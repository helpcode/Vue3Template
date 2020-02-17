import { __decorate, __metadata } from "tslib";
import { Utils } from '../utils/index.utils';
import axios from 'axios';
import { Injectable } from 'vue3decorators';
let Axios = class Axios {
    constructor() {
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
    async get(params) {
        try {
            return await axios.get(params.url, {
                params: params.data,
                headers: Object.assign({}, params.header)
            });
        }
        catch (e) {
            throw new Error(`GET 请求出错：${e.message}`);
        }
    }
    /**
     * Post 请求
     * 请求参数请参考接口：RequestParams
     * @param params
     */
    async post(params) {
        try {
            return await axios.post(params.url, params.data, {
                headers: Object.assign({}, params.header)
            });
        }
        catch (e) {
            throw new Error(`POST 请求出错：${e.message}`);
        }
    }
    /**
     * Put 请求
     * 请求参数请参考接口：RequestParams
     * @param params
     */
    async put(params) {
        try {
            return await axios.put(params.url, params.data);
        }
        catch (e) {
            throw new Error(`PUT 请求出错：${e.message}`);
        }
    }
    /**
     * delete 请求
     * 请求参数请参考接口：RequestParams
     * @param params
     */
    async delete(params) {
        try {
            return await axios.delete(params.url, { params: params.data });
        }
        catch (e) {
            throw new Error(`DELETE 请求出错：${e.message}`);
        }
    }
    /**
     * 添加响应拦截器
     * @constructor
     */
    async ResponseInterceptor() {
        axios.interceptors.response.use(response => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    /**
     * 添加请求拦截器
     * @constructor
     */
    async RequestInterceptor() {
        axios.interceptors.request.use(config => {
            /**
             * 统一设置请求头
             */
            config.headers['bmy'] = "2020";
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
    }
};
Axios = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Axios);
export { Axios };
//# sourceMappingURL=index.dao.js.map