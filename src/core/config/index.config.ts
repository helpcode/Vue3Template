import { PluginObject } from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import VueCompositionApi from '@vue/composition-api';

/**
 * 需要被挂载全局方法，其他全局性东西一样
 */
import { Utils } from '../utils/index.utils';

/**
 * IOC
 */
import { Injectable } from 'vue3decorators';


@Injectable()
export class config {

  /**
   * 接口配置: 测试环境基地址，正式环境基地址，具体页面接口
   */
  public static AjaxConfig: {
    [ key: string ]: any
  } = {
    DevUrl: 'http://localhost:9000',
    ProdUrl: 'http://xxx:9020/h5',
    ApiList: {
      index: '/test'
    },
  };

  /**
   * 需要被挂载的节点
   */
  public static mountElement: string = '#app';

  /**
   * Vue插件
   */
  public static VuePlugs: PluginObject<never>[] 
  = [
    VueRouter,
    VueCompositionApi
  ];
  
  /**
   * Vue-router 配置
   */
  public static RouterConfigUrl: RouterOptions = {
    routes: [
      {
        path: '/',
        name: 'home',
        component: Utils.AsyncComponentHook("Home"),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: Utils.AsyncComponentHook("About"),
        meta: {
          title: '任务'
        }
      }
    ]
  }
}
