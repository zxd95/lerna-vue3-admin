import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "../layout/index.vue"
import { getCookie } from "../utils/cookie"
import NProgress from "../utils/progress"

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
        meta: {
          title: "首页",
          showLink: true,
          savedPosition: false,
        },
      },
    ],
    meta: {
      icon: "el-icon-s-home",
      showLink: true,
      savedPosition: false,
    },
  },
  {
    path: "/components",
    name: "components",
    component: Layout,
    redirect: "/components/map",
    children: [
      {
        path: "/components/map",
        component: () =>
          import(
            /* webpackChunkName: "components" */ "../views/components/map/index.vue"
          ),
        meta: {
          title: "地图",
          showLink: false,
          savedPosition: true,
        },
      },
      {
        path: "/components/draggable",
        component: () =>
          import(
            /* webpackChunkName: "components" */ "../views/components/draggable/index.vue"
          ),
        meta: {
          title: "拖拽",
          showLink: false,
          savedPosition: true,
        },
      },
    ],
    meta: {
      icon: "el-icon-menu",
      title: "组件",
      showLink: true,
      savedPosition: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
    meta: {
      title: "登录",
      showLink: false,
    },
  },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: () =>
  //     import(/* webpackChunkName: "register" */ "../views/register.vue"),
  //   meta: {
  //     title: "注册",
  //     showLink: false,
  //   },
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const whiteList = ["/login", "/register"]

router.beforeEach((to, _from, next) => {
  NProgress.start()
  // const { t } = i18n.global
  document.title = to.meta.title // 动态title
  whiteList.indexOf(to.path) !== -1 || getCookie("info")
    ? next()
    : next("/login") // 全部重定向到登录页
})

router.afterEach(() => {
  NProgress.done()
})

export default router
