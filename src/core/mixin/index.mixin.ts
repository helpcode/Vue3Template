import { setRuntimeVM } from '../utils/runtime.utils';
import { Mixin, Injectable } from 'vue3decorators';

/**
 * 类的方法上如果加上注解 @Mixin()，那么该方法
 * 就可以作为Vue的全局mixin
 */
@Injectable()
export class MixinList {
    
    @Mixin()
    public Router() {
        return {
            beforeCreate: setRuntimeVM
        }
    }
}