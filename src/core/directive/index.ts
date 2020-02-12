import { VNodeDirective, VNode } from 'vue'

/**
 * 自定义指令，考虑实现采用注解的方式进行自动注入
 * 参考文档： https://cn.vuejs.org/v2/guide/custom-directive.html
 */
export function index() {
    return {
        bind: (el: Element, binding: VNodeDirective, vnode: VNode) => {
            // console.log(el)
            // console.log(binding)
            console.log("v-index 指令接收到的数值：", binding.value);
            // console.log(vnode);
        },
        inserted: () => {

        }
    }
}