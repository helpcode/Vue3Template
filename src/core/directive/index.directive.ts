import { VNodeDirective, VNode } from 'vue'
import { Directive, Injectable } from 'vue3decorators';

/**
 * 自定义指令
 * 注意如果类的方法被加上了 @Directive() 注解
 * 那么该方法就会被注册为vue的自定义指令。
 * 例如：public index() {}，那么在组件中指令为：v-index
 *      public index() {} 必须返回对象，看下面案例
 */
@Injectable()
export class DirectiveList {

    @Directive()
    public index() {
        return {
            bind: (el: Element, binding: VNodeDirective, vnode: VNode) => {
                // console.log(el)
                // console.log(binding)
                console.log("v-index 指令接收到的数值：", binding.value);
                // console.log(vnode);
            }
        }
    }

    @Directive()
    public test() {
        return {
            bind: (el: Element) => {
                console.log("test: ", el)
            }
        }
    }
 }