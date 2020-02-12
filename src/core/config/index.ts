import VueRouter, { RouterOptions } from 'vue-router';
import { PluginObject, ComponentOptions, DirectiveOptions } from 'vue';

/**
 * 需要被挂载全局方法，其他全局性东西一样
 */
import { Utils } from '../utils';

/**
 * 保存 router 对象
 */
import VueCompositionApi from '@vue/composition-api';
import { Injectable } from '../decorators/Ioc';

/**
 * mixin
 */
import SaveRouterObject from '../mixin/routerMixin';

/**
 * directive
 */
import { index } from '../directive/index';

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
   * Vue 自定义指令，主要在 src/directive/ 文件夹
   */
  public static VueDirective: Array<{ n: string, f: DirectiveOptions }> = [
    { n: 'index', f: index() }
  ]

  /**
   * Vue Mixin 混入，主要在 src/mixin/ 文件夹
   */
  public static VueMixin: ComponentOptions<Vue>[] = [
    SaveRouterObject
  ];

  /**
   * 非Vue的全局性插件，Vue3中无法访问组件 this
   * 所以建议vue组件中这般访问：(ctx.root as any).$utils
   */
  public static NotVuePlugs: Array<{ 
    n: string, f: { new(): void } 
  }> = [
    { n: '$config', f: config },
    { n: '$utils', f: Utils }
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
