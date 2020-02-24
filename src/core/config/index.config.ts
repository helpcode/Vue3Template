import { PluginObject } from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import VueCompositionApi from '@vue/composition-api';
import { AutoRoutesConfig } from './route.config';
import { Injectable } from 'vue3decorators';

// 1：如果需要全局导入，请取消下面注释。
// 并在 PluginObject 的数组中，增加 Vant 即可。
// import Vant from 'vant';

// 2：默认使用vant的自动按需导入
// 参考地址：https://youzan.github.io/vant/#/zh-CN/quickstart

// 注意：所有Vue插件都是先安装，然后在这里导入，然后修改 PluginObject 增加插件名即可。

import 'vant/lib/index.css';

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
    VueRouter,
    VueCompositionApi
  ];
  
  /**
   * Vue-router 配置
   * 注意已参考Nuxt.js源码，实现根据文件夹page/的结构自动生成路由的配置文件。
   * 如果你的文件夹结果不是page/，那么可以在 vue.config.js 修改 pluginOptions.route中对象
   * 可配置参数如下（根据自己项目结构来）：
   * {
   *     TemplateFolderName: 'page(默认)'           # 存放Vue路由页面的文件夹名称
   *     RootFolderName: './src/application(默认)'  # 从src/开始到TemplateFolderName文件夹父一级文件夹相对路径
   * }
   * 如果没看懂源码，请勿修改 AutoRoutesConfig。
   */
  public static RouterConfigUrl: RouterOptions = {
    mode: 'hash',
    routes: AutoRoutesConfig
  }
}