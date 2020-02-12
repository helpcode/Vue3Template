import "reflect-metadata";

//ioc容器 用于存放被依赖的类
let classPool:Array<Function> = [];

// 收集依赖
export function Injectable() {
    return (_constructor: Function) => {
        if(classPool.indexOf(_constructor) !== -1) {
            throw new Error('无需重复注册');
            return;
        } else {
            //注册
            classPool.push(_constructor);
        }
    }
}

// 注入依赖
export function Inject(): (_constructor: any, propertyName: string) => any {
    return async function (_constructor: any, propertyName: string): Promise<any> {
        const propertyType: any = Reflect.getMetadata('design:type', _constructor, propertyName);
        if (classPool.indexOf(propertyType) == -1) {
            throw new Error(`${propertyType} 没有被注册`)
            return;
        } else {
            _constructor[propertyName] = new (classPool[classPool.indexOf(propertyType)] as any)() ;
            return _constructor[propertyName];
        }
    }
}