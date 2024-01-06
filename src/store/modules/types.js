import {defineStore} from "pinia";

export const menus = [
  { key: 'overview', title: '设备概览', path: '/overview' },
  { key: 'monitor', title: '设备监控', path: '/monitor' },
  { key: 'example', title: '算力接入', path: '/example' },
  { key: 'task', title: '任务管理', path: '/task' },
  { key: 'income', title: '收益结算', path: '/income' }
]

export const allMenus = {}

export const useTypeStore = defineStore('useTypeStore', {
  state: () => ({
    menus,
    frame: 'overview',
    // work: 'sensor'
  }),
  getters: {
    getMenus: (state) => state.menus.reduce((p, n) => ({...p, [n.key]: n}), {})
  },
  actions: {}
})
