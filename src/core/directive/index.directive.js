import { __decorate, __metadata } from "tslib";
import { Directive, Injectable } from 'vue3decorators';
/**
 * 自定义指令
 * 注意如果类的方法被加上了 @Directive() 注解
 * 那么该方法就会被注册为vue的自定义指令。
 * 例如：public index() {}，那么在组件中指令为：v-index
 *      public index() {} 必须返回对象，看下面案例
 */
let DirectiveList = class DirectiveList {
    index() {
        return {
            bind: (el, binding, vnode) => {
                // console.log(el)
                // console.log(binding)
                console.log("v-index 指令接收到的数值：", binding.value);
                // console.log(vnode);
            }
        };
    }
    test() {
        return {
            bind: (el) => {
                console.log("test: ", el);
            }
        };
    }
};
__decorate([
    Directive(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirectiveList.prototype, "index", null);
__decorate([
    Directive(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirectiveList.prototype, "test", null);
DirectiveList = __decorate([
    Injectable()
], DirectiveList);
export { DirectiveList };
//# sourceMappingURL=index.directive.js.map