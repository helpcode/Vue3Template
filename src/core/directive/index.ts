import { VNodeDirective, VNode } from 'vue'

/**
 * 自定义指令
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