import { createRouter,createWebHashHistory } from "vue-router";
import Login from '../page/login/index.vue'
import {menus, allMenus} from "@/store/modules/types";

const defaultRoute = {
  path:'/',
  redirect:'/login'　　//默认显示
}

const children = menus.map(item => {
  return {
    path: item.path,
    name: item.key,
    component:()=>import(`../page/project/${item.key}/index.vue`)
  }
})

const workBench = {
  path:'/home',
  name: 'workBench',
  component:()=>import("../page/main/index.vue"),
  redirect: '/overview',
  meta: { title: '工作台' },
  children
}

const routes = [
  {
    path:'/login',
    name: 'login',
    component: Login,
    meta: { title: '登录' }
  },
  workBench,
  defaultRoute
]

const router = createRouter({
  history: createWebHashHistory('/login'),
  routes
})

export {router, routes}
