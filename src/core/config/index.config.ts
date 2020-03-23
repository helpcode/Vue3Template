import { PluginObject } from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import VueCompositionApi from '@vue/composition-api';
import { AutoRoutesConfig } from './route.config';
import { Injectable } from 'vue3decorators';

import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js';

@Injectable()
export class config {

  /**
   * 接口配置: 测试环境基地址，正式环境基地址，具体页面接口
   */
  public static AjaxConfig: {
    DevUrl: string,
    ProdUrl: string, 
    ApiList: { [ key: string ]: string}
  } = {
    DevUrl: 'http://localhost:9000',
    ProdUrl: 'http://127.0.0.1:3000',
    ApiList: {
      index: '/test',
      haha: '/haha',
      Login: '/user-login'
    },
  };

  /**
   * 需要被挂载的节点
   */
  public static mountElement: string = '#app';

  /**
   * Vue插件
   */
  public static VuePlugs: PluginObject<never>[] = [
    Vant,
    VueRouter,
    VueCompositionApi
  ];

  public static RouterConfigUrl: RouterOptions = {
    mode: 'hash',
    routes: AutoRoutesConfig
  }
}