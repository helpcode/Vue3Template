import { config } from '../config/index.config';
import { GlobalMethod } from 'vue3decorators';
// @ts-ignore
import wx from 'weixin-js-sdk';

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
   * 动态设置网页title
   * @param title
   */
  @GlobalMethod()
  public setTitle(title: string): void {
    document.title = title;
  }

  /**
   * 获取配置
   *
   */
  @GlobalMethod()
  public getConfig() {
    return config;
  }

  /**
   * 时间戳转正常时间
   * @param data
   */
  @GlobalMethod()
  public formatDate(data: number): string {
    let now=new Date(data*1000);
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let date=now.getDate();
    let hour=now.getHours();
    let minute=now.getMinutes();
    let second=now.getSeconds();
    return month+"."+date;
  }


  /**
   * 配置基本信息
   * @param data
   */
  @GlobalMethod()
  public wxConfig(data: any): void {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      // @ts-ignore
      appId: "wxced93207e88f7576", // 必填，公众号的唯一标识
      timestamp: data.timesTamp , // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signaTure,// 必填，签名
      jsApiList: ["chooseImage","uploadImage", "updateAppMessageShareData", "updateTimelineShareData", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表
    });
  }

  /**
   * 使用微信sdk
   * data 初始号数据
   * ready 初始号成功后后续操作需要在这使用
   */
  @GlobalMethod()
  public wxSdk(ready: Function): void {
    wx.ready(function(){
      ready(wx)
    });
  }

}
