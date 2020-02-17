import { __decorate, __metadata } from "tslib";
import { GET, POST } from 'vue3decorators';
class HomeServiceImpl {
    // 直接用方法名index作为 ApiList 中对象key名称去寻找请求地址
    async index(data) { }
    async haha(data) { }
}
__decorate([
    GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeServiceImpl.prototype, "index", null);
__decorate([
    POST(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeServiceImpl.prototype, "haha", null);
export default new HomeServiceImpl();
//# sourceMappingURL=home.service.impl.js.map