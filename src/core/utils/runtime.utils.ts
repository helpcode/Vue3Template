import Vue from 'vue';

/**
 * 混入mixin，保存Vue对象
 */
interface Runtime {
  vm?: Vue;
}

const runtime: Runtime = {};

// 获取当前vue实例
export function getRuntimeVM(): Vue {
  if (runtime.vm) return runtime.vm;
  throw new ReferenceError('[vue-hooks] Not found vue instance.');
}

// 保存Vue实例
export function setRuntimeVM(this: Vue, vue?: Vue) {
  const vm = this || vue;
  if (typeof vm.$options.setup === 'function') {
    runtime.vm = vm;
  }
}