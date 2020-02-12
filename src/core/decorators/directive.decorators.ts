import "reflect-metadata";
import directiveModel from '../utils/directive.utils';
/**
 * 收集存储Vue的指令
 * n: 指令名就是方法名
 * f: 调用方法后的返回值是个对象
 */
export function Directive() {
    return (target: any, propertyKey: string) => {
        directiveModel.DirectiveContainer = { n: propertyKey, f: target[propertyKey]() }
    }
}