// 根据page目录结构，自动生成的路由配置文件
// 参考Nuxt.js：https://zh.nuxtjs.org/guide/routing
// @ts-ignore

export const AutoRoutesConfig = [
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: 'about' */ '@/page/about.vue'),
    meta: {
      isLogin: false,
      title: "关于我"
    }
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: 'user' */ '@/page/user.vue'),
    meta: {
      isLogin: false,
      title: "用户列表"
    },
    children: [
      {
        name: "user",
        path: "",
        component: () => import(/* webpackChunkName: 'userindex' */ '@/page/user/index.vue'),
        meta: {
          isLogin: false,
          title: "用户中心首页"
        }
      },
      {
        name: "user-id",
        path: ":id",
        component: () => import(/* webpackChunkName: 'user_id' */ '@/page/user/_id.vue'),
        meta: {
          isLogin: false,
          title: "用户详情页面"
        }
      }
    ]
  },
  {
    name: "index",
    path: "/",
    component: () => import(/* webpackChunkName: 'index' */ '@/page/index.vue'),
    meta: {
      isLogin: false,
      title: "首页"
    }
  }
];