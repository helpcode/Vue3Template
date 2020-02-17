import { __decorate, __metadata } from "tslib";
import App from '@/App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { Inject, directiveModel, mixinModel, globalMethodModel, StartBoot } from 'vue3decorators';
/**
 * 这些类只需要被@Inject()实例化然后注入到属性即可
 * 为了让注解生效
 */
import { config } from '../config/index.config';
import { Axios } from '../dao/index.dao';
import { DirectiveList } from '../directive/index.directive';
import { MixinList } from '../mixin/index.mixin';
/**
 * 项目初始化文件
 */
let Init = class Init {
    constructor() {
        this.initVuePlugsArray = config.VuePlugs;
        this.Vues = Vue;
        this.Vues.config.productionTip = false;
        this.initPlugs();
    }
    /**
     * 初始化Vue和非Vue插件，Vue Mixin，vue directive
     */
    initPlugs() {
        directiveModel.DirectiveContainer.forEach(v => this.Vues.directive(v['n'], v['f']));
        mixinModel.MixinContainer.forEach(v => this.Vues.mixin(v));
        globalMethodModel.GlobalMethod.forEach(v => this.Vues.prototype[v['n']] = v['f']);
        this.initVuePlugsArray.forEach(v => this.Vues.use(v));
        this.InitVueRouter();
    }
    /**
     * 初始化配置全局路由
     * @constructor
     */
    InitVueRouter() {
        this.router = new VueRouter(config.RouterConfigUrl);
        // 全局路由守卫
        this.router.beforeEach((to, from, next) => {
            document.title = to.meta.title;
            next();
        });
        // 重写路由Push
        const routerPush = VueRouter.prototype.push;
        VueRouter.prototype.push = function push(location) {
            // @ts-ignore
            return routerPush.call(this, location).catch((error) => error);
        };
    }
};
Init.AppComponent = App;
__decorate([
    Inject(),
    __metadata("design:type", config)
], Init.prototype, "config", void 0);
__decorate([
    Inject(),
    __metadata("design:type", DirectiveList)
], Init.prototype, "directiveList", void 0);
__decorate([
    Inject(),
    __metadata("design:type", MixinList)
], Init.prototype, "mixinList", void 0);
__decorate([
    Inject(),
    __metadata("design:type", Axios)
], Init.prototype, "axios", void 0);
Init = __decorate([
    StartBoot(),
    __metadata("design:paramtypes", [])
], Init);
export { Init };
//# sourceMappingURL=init.run.js.map