import { config } from '../config/index.config';
import { GlobalMethod } from 'vue3decorators';
/**
 * utils 工具类
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
