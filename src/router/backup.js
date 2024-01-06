import { createRouter,createWebHashHistory } from "vue-router";
import Login from '../page/login/index.vue'

const routes = [
 {
  path:'/login',
  name: 'login',
  component: Login,
  meta: { title: '登录' }
 },
 {
  path:'/home',
  name: 'workBench',
  component:()=>import('../page/main/index.vue'),
  redirect: '/ae',
  meta: { title: '工作台' },
  children: [
    {
      path:'/ae',
      name: 'ae',
      component:()=>import("../page/project/index.vue"),
      redirect: '/ae/sensor',
      children: [
        {
          path:'sensor',
          name: 'aeSensor',
          meta: { title: '超声波（AE） - 传感器灵敏度' },
          component:()=>import("../page/project/ae/sensor/index.vue"),
        },
        {
          path: 'sensitivity',
          name: 'aeSensitivity',
          meta: { title: '超声波（AE） - 检测灵敏度' },
          component: () => import('../page/project/ae/sensitivity/index.vue'),
        },
        {
          path: 'frequency',
          name: 'aeFrequency',
          meta: { title: '超声波（AE） - 检测频带' },
          component: () => import('../page/project/ae/frequency/index.vue'),
        },
        {
          path: 'dynamic',
          name: 'aeDynamic',
          meta: { title: '超声波（AE） - 动态范围' },
          component: () => import('../page/project/ae/dynamic/index.vue'),
        },
        {
          path: 'linearity',
          name: 'aeLinearity',
          meta: { title: '超声波（AE） - 线性度误差' },
          component: () => import('../page/project/ae/linearity/index.vue'),
        },
        {
          path: 'consistency',
          name: 'aeConsistency',
          meta: { title: '超声波（AE） - 通道一致性' },
          component: () => import('../page/project/ae/consistency/index.vue'),
        },
        {
          path: 'repeatability',
          name: 'aeRepeatability',
          meta: { title: '超声波（AE） - 重复性' },
          component: () => import('../page/project/ae/repeatability/index.vue'),
        },
        {
          path: 'oscilloscope',
          name: 'aeOscilloscope',
          meta: { title: '超声波（AE） - 示波器' },
          component: () => import('../page/project/ae/oscilloscope/index.vue'),
        },
      ]
    },
    {
      path:'/ncu',
      name: 'ncu',
      component:()=>import("../page/project/index.vue"),
      redirect: '/ncu/sensor',
      children: [
        {
          path:'sensor',
          name: 'ncuSensor',
          meta: { title: '超声波 - 传感器灵敏度' },
          component:()=>import("../page/project/ncu/sensor/index.vue"),
        },
        {
          path: 'sensitivity',
          name: 'ncuSensitivity',
          meta: { title: '超声波 - 检测灵敏度' },
          component: () => import('../page/project/ncu/sensitivity/index.vue'),
        },
        {
          path: 'frequency',
          name: 'ncuFrequency',
          meta: { title: '超声波 - 检测频带' },
          component: () => import('../page/project/ncu/frequency/index.vue'),
        },
        {
          path: 'dynamic',
          name: 'ncuDynamic',
          meta: { title: '超声波 - 动态范围' },
          component: () => import('../page/project/ncu/dynamic/index.vue'),
        },
        {
          path: 'linearity',
          name: 'ncuLinearity',
          meta: { title: '超声波 - 线性度误差' },
          component: () => import('../page/project/ncu/linearity/index.vue'),
        },
        {
          path: 'consistency',
          name: 'ncuConsistency',
          meta: { title: '超声波 - 通道一致性' },
          component: () => import('../page/project/ncu/consistency/index.vue'),
        },
        {
          path: 'repeatability',
          name: 'ncuRepeatability',
          meta: { title: '超声波 - 重复性' },
          component: () => import('../page/project/ncu/repeatability/index.vue'),
        },
        {
          path: 'oscilloscope',
          name: 'ncuOscilloscope',
          meta: { title: '超声波 - 示波器' },
          component: () => import('../page/project/ncu/oscilloscope/index.vue'),
        },
      ]
    },
    {
      path:'/ep',
      name: 'ep',
      component:()=>import("../page/project/index.vue"),
      redirect: '/ep/sensor',
      children: [
        {
          path:'sensor',
          name: 'epSensor',
          meta: { title: '电脉冲 - 传感器灵敏度' },
          component:()=>import("../page/project/ep/sensor/index.vue"),
        },
        {
          path: 'sensitivity',
          name: 'epSensitivity',
          meta: { title: '电脉冲 - 检测灵敏度' },
          component: () => import('../page/project/ep/sensitivity/index.vue'),
        },
        {
          path: 'frequency',
          name: 'epFrequency',
          meta: { title: '电脉冲 - 检测频带' },
          component: () => import('../page/project/ep/frequency/index.vue'),
        },
        {
          path: 'dynamic',
          name: 'epDynamic',
          meta: { title: '电脉冲 - 动态范围' },
          component: () => import('../page/project/ep/dynamic/index.vue'),
        },
        {
          path: 'linearity',
          name: 'epLinearity',
          meta: { title: '电脉冲 - 线性度误差' },
          component: () => import('../page/project/ep/linearity/index.vue'),
        },
        {
          path: 'consistency',
          name: 'epConsistency',
          meta: { title: '电脉冲 - 通道一致性' },
          component: () => import('../page/project/ep/consistency/index.vue'),
        },
        {
          path: 'repeatability',
          name: 'epRepeatability',
          meta: { title: '电脉冲 - 重复性' },
          component: () => import('../page/project/ep/repeatability/index.vue'),
        },
        {
          path: 'oscilloscope',
          name: 'epOscilloscope',
          meta: { title: '电脉冲 - 示波器' },
          component: () => import('../page/project/ep/oscilloscope/index.vue'),
        },
      ]
    },
    {
      path:'/hf',
      name: 'hf',
      component:()=>import("../page/project/index.vue"),
      redirect: '/hf/sensor',
      children: [
        {
          path:'sensor',
          name: 'hfSensor',
          meta: { title: '高频(HF) - 传感器灵敏度' },
          component:()=>import("../page/project/hf/sensor/index.vue"),
        },
        {
          path: 'sensitivity',
          name: 'hfSensitivity',
          meta: { title: '高频(HF) - 检测灵敏度' },
          component: () => import('../page/project/hf/sensitivity/index.vue'),
        },
        {
          path: 'frequency',
          name: 'hfFrequency',
          meta: { title: '高频(HF) - 检测频带' },
          component: () => import('../page/project/hf/frequency/index.vue'),
        },
        {
          path: 'dynamic',
          name: 'hfDynamic',
          meta: { title: '高频(HF) - 动态范围' },
          component: () => import('../page/project/hf/dynamic/index.vue'),
        },
        {
          path: 'linearity',
          name: 'hfLinearity',
          meta: { title: '高频(HF) - 线性度误差' },
          component: () => import('../page/project/hf/linearity/index.vue'),
        },
        {
          path: 'consistency',
          name: 'hfConsistency',
          meta: { title: '高频(HF) - 通道一致性' },
          component: () => import('../page/project/hf/consistency/index.vue'),
        },
        {
          path: 'repeatability',
          name: 'hfRepeatability',
          meta: { title: '高频(HF) - 重复性' },
          component: () => import('../page/project/hf/repeatability/index.vue'),
        },
        {
          path: 'oscilloscope',
          name: 'hfOscilloscope',
          meta: { title: '高频(HF) - 示波器' },
          component: () => import('../page/project/hf/oscilloscope/index.vue'),
        },
      ]
    },
    {
      path:'/tev',
      name: 'tev',
      component:()=>import("../page/project/index.vue"),
      redirect: '/tev/sensor',
      children: [
        {
          path:'sensor',
          name: 'tevSensor',
          meta: { title: '暂态地(TEV) - 传感器灵敏度' },
          component:()=>import("../page/project/tev/sensor/index.vue"),
        },
        {
          path: 'sensitivity',
          name: 'tevSensitivity',
          meta: { title: '暂态地(TEV) - 检测灵敏度' },
          component: () => import('../page/project/tev/sensitivity/index.vue'),
        },
        {
          path: 'frequency',
          name: 'tevFrequency',
          meta: { title: '暂态地(TEV) - 检测频带' },
          component: () => import('../page/project/tev/frequency/index.vue'),
        },
        {
          path: 'dynamic',
          name: 'tevDynamic',
          meta: { title: '暂态地(TEV) - 动态范围' },
          component: () => import('../page/project/tev/dynamic/index.vue'),
        },
        {
          path: 'linearity',
          name: 'tevLinearity',
          meta: { title: '暂态地(TEV) - 线性度误差' },
          component: () => import('../page/project/tev/linearity/index.vue'),
        },
        {
          path: 'consistency',
          name: 'tevConsistency',
          meta: { title: '暂态地(TEV) - 通道一致性' },
          component: () => import('../page/project/tev/consistency/index.vue'),
        },
        {
          path: 'repeatability',
          name: 'tevRepeatability',
          meta: { title: '暂态地(TEV) - 重复性' },
          component: () => import('../page/project/tev/repeatability/index.vue'),
        },
        {
          path: 'oscilloscope',
          name: 'tevOscilloscope',
          meta: { title: '暂态地(TEV) - 示波器' },
          component: () => import('../page/project/tev/oscilloscope/index.vue'),
        },
      ]
    },
  ]
 },
  {
    path:'/',
    redirect:'/home'　　//默认显示
  }
]

const router = createRouter({
//  history: createWebHistory('/'),
  history: createWebHashHistory('/login'),
 routes
})

// if (localStorage.getItem('token') && !store.state.token) {
//   store.commit('set_token', localStorage.getItem('token'))
// }
// if (localStorage.getItem('nickName') && !store.state.nickName) {
//   store.commit('set_nickName', localStorage.getItem('nickName'))
// }

export {router, routes}
