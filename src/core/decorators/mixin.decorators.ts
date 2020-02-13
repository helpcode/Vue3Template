import "reflect-metadata";
import MixinModel from '../utils/mixin.utils';
/**
 * 收集存储Vue的指令
 * n: 指令名就是方法名
 * f: 调用方法后的返回值是个对象
 */
export function Mixin() {
    return (target: any, propertyKey: string) => {
        MixinModel.MixinContainer = target[propertyKey]()
    }
}