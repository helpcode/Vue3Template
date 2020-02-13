import "reflect-metadata";
import GlobalMethodModel from '../utils/global.method.utils';
/**
 * 收集存储Vue的指令
 * n: 指令名就是方法名
 * f: 调用方法后的返回值是个对象
 */
export function GlobalMethod() {
    return (target: any, propertyKey: string) => {
        GlobalMethodModel.GlobalMethod = { n: `$${propertyKey}`, f: target[propertyKey] }
    }
}