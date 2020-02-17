import { __decorate, __metadata } from "tslib";
import { setRuntimeVM } from '../utils/runtime.utils';
import { Mixin, Injectable } from 'vue3decorators';
/**
 * 类的方法上如果加上注解 @Mixin()，那么该方法
 * 就可以作为Vue的全局mixin
 */
let MixinList = class MixinList {
    Router() {
        return {
            beforeCreate: setRuntimeVM
        };
    }
};
__decorate([
    Mixin(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MixinList.prototype, "Router", null);
MixinList = __decorate([
    Injectable()
], MixinList);
export { MixinList };
//# sourceMappingURL=index.mixin.js.map