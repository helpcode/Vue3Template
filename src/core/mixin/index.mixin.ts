import { setRuntimeVM } from '../utils/runtime.utils';
import { Mixin } from '../decorators/mixin.decorators';
import { Injectable } from '../decorators/Ioc.decorators';

@Injectable()
export class MixinList {
    
    @Mixin()
    public Router() {
        return {
            beforeCreate: setRuntimeVM
        }
    }
}