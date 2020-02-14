import App from '@/App.vue';
import Vue, { VueConstructor , PluginObject} from 'vue';
import VueRouter, { RawLocation, Route } from 'vue-router';
import { Inject, directiveModel, mixinModel, globalMethodModel } from 'vue3decorators';

/**
 * 这些类只需要被@Inject()实例化然后注入到属性即可
 * 为了让注解生效
 */
import { config } from '../config/index.config'
import { Axios } from '../dao/index.dao';
import { DirectiveList } from '../directive/index.directive';
import { MixinList } from '../mixin/index.mixin';


/**
 * 项目初始化文件
 */
export class Init {

  @Inject()
  private config!: config;

  @Inject()
  public directiveList!: DirectiveList;

  @Inject()
  public mixinList!: MixinList;

  @Inject()
  public axios!: Axios;
  
  private initVuePlugsArray = config.VuePlugs;
  protected router!: VueRouter;
  protected Vues: VueConstructor<Vue> = Vue;
  public static AppComponent: VueConstructor = App;

  constructor() {
    this.Vues.config.productionTip = false;
    this.initPlugs();
  }

  /**
   * 初始化Vue和非Vue插件，Vue Mixin，vue directive
   */
  private initPlugs(): void {
    (directiveModel.DirectiveContainer as []).forEach(v => this.Vues.directive(v['n'], v['f']));
    (mixinModel.MixinContainer as []).forEach(v => this.Vues.mixin(v));
    (globalMethodModel.GlobalMethod as []).forEach(v => this.Vues.prototype[v['n']] = v['f']);
    this.initVuePlugsArray.forEach(v => this.Vues.use(v));
    this.InitVueRouter();
  }

  /**
   * 初始化配置全局路由
   * @constructor
   */
  private InitVueRouter(): void {
    this.router = new VueRouter(config.RouterConfigUrl);

    // 全局路由守卫
    this.router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | void) => void) => {
      document.title = to.meta.title;
      next()
    });

    // 重写路由Push
    const routerPush: (location: RawLocation) 
          => Promise<Route> 
          = VueRouter.prototype.push;
          
    VueRouter.prototype.push = function push(location: RawLocation): Promise<Route> {
      // @ts-ignore
      return routerPush.call(this, location).catch((error: Error) => error)
    };
  }
}
