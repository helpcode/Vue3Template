import { config } from '../config/index.config';
import { GlobalMethod } from './../decorators/global.decorators';
/**
 * utils 类中，方法名如果加上 static 只是给脚手架内部做配置用于启动，
 * 是不能再vue 组件中使用的！！！
 * 不加修饰符 static 则可以在Vue组件中调用
 * 具体调用方式看：Home.vue组件
 */
export class Utils {
  /**
   * 检测当前环境，动态返回ajax接口的对应的URL地址
   * @constructor
   */
  public static CheckAjaxUrl(): string {
    if (process.env.NODE_ENV === 'production') {
      return config.AjaxConfig.ProdUrl;
    } else {
      return config.AjaxConfig.DevUrl;
    }
  }

  /**
   * 异步加载组件，仅限 pages 中组件
   * @param fileName 组件的文件名称
   * @constructor
   */
  public static AsyncComponentHook(fileName: String): Function {
    const component = import(/* webpackChunkName: "[request]" */ `@/page/${fileName}.vue`);
    component.catch((e: Error) => console.error(`组件加载失败: ${e}`));
    return () => component;
  }

  /**
   * 动态设置网页title
   * @param title
   */
  @GlobalMethod()
  public setTitle(title: string): void {
    document.title = title;
  }

}
