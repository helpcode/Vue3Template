import { __decorate, __metadata } from "tslib";
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
    static CheckAjaxUrl() {
        if (process.env.NODE_ENV === 'production') {
            return config.AjaxConfig.ProdUrl;
        }
        else {
            return config.AjaxConfig.DevUrl;
        }
    }
    /**
     * 异步加载组件，仅限 pages 中组件
     * @param fileName 组件的文件名称
     * @constructor
     */
    static AsyncComponentHook(fileName) {
        const component = import(/* webpackChunkName: "[request]" */ `@/page/${fileName}.vue`);
        component.catch((e) => console.error(`组件加载失败: ${e}`));
        return () => component;
    }
    /**
     * 动态设置网页title
     * @param title
     */
    setTitle(title) {
        document.title = title;
    }
}
__decorate([
    GlobalMethod(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Utils.prototype, "setTitle", null);
//# sourceMappingURL=index.utils.js.map