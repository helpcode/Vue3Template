// 根据page目录结构，自动生成的路由配置文件
// 参考Nuxt.js：https://zh.nuxtjs.org/guide/routing
// @ts-ignore

export const AutoRoutesConfig = [
  {
    name: "About",
    path: "/About",
    component: () => import(/* webpackChunkName: '[request]' */ '@/page/About.vue'),
    meta: {}
  },
  {
    name: "user",
    path: "/user",
    component: () => import(/* webpackChunkName: '[request]' */ '@/page/user.vue'),
    meta: {},
    children: [
      {
        name: "user-login",
        path: "login",
        component: () => import(/* webpackChunkName: '[request]' */ '@/page/user/login.vue'),
        meta: {}
      },
      {
        name: "user-id",
        path: ":id?",
        component: () => import(/* webpackChunkName: '[request]' */ '@/page/user/_id.vue'),
        meta: {}
      }
    ]
  },
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: '[request]' */ '@/page/Home.vue'),
    meta: {}
  }
];