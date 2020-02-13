import "reflect-metadata";
import MixinModel from '../utils/mixin.utils';
/**
 * 收集存储mixin
 */
export function Mixin() {
    return (target: any, propertyKey: string) => {
        MixinModel.MixinContainer = target[propertyKey]()
    }
}