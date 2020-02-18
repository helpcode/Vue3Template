// 根据page目录结构，自动生成的路由配置文件
// 参考Nuxt.js：https://zh.nuxtjs.org/guide/routing
// @ts-ignore

export const AutoRoutesConfig = [
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: '[request]' */ '@/page/about.vue'),
    meta: {}
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: '[request]' */ '@/page/user.vue'),
    meta: {},
    children: [
      {
        name: "user",
        path: "",
        component: () => import(/* webpackChunkName: '[request]' */ '@/page/user/index.vue'),
        meta: {}
      },
      {
        name: "user-id",
        path: ":id",
        component: () => import(/* webpackChunkName: '[request]' */ '@/page/user/_id.vue'),
        meta: {}
      }
    ]
  },
  {
    name: "index",
    path: "/",
    component: () => import(/* webpackChunkName: '[request]' */ '@/page/index.vue'),
    meta: {}
  }
];