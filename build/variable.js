// 基础变量配置
module.exports = {
   PublicConfig: {
     // 入口
     entry: './src/core/run/index.run.ts',
     // 别名
     alias: {
       public: '../public',
       core: '../src/core',
       impl: '../src/core/service/impl',
       root: '../src/application',
       assets: '../src/application/assets',
       less: '../src/application/assets/less/components',
       globalStyl: '../src/application/assets/less/imports.less'
     }
   },
   cdn: {
     css: [],
     js: [
       'https://cdn.bootcss.com/vue/2.6.11/vue.runtime.min.js',
       'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
       'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
     ]
   }
 };