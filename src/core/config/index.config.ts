import { PluginObject } from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import VueCompositionApi from '@vue/composition-api';
import { AutoRoutesConfig } from './route.config';
import { Injectable } from 'vue3decorators';

import Vant from 'vant';
import 'vant/lib/index.css';

import md5 from 'js-md5';

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
      Login: '/user-login',
      about: '/about'
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

  /**
   * 第三方非vue插件
   * n: 在vue中使用的名字，ctx.root.$md5()
   * v: import导入的插件变量
   */
  public static NotVuePlugs: { n: string, f: ()=>void }[] = [
    { n: '$md5', f: md5 }
  ]

  public static RouterConfigUrl: RouterOptions = {
    mode: 'history',
    base: './',
    routes: AutoRoutesConfig
  }
}