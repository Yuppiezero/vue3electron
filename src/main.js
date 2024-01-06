import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-themes/vue-gi-demo/index.less';
import {router} from "./router/index"
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import './assets/iconfont/iconfont.css'
import store from './store/index.js'
import { Message } from '@arco-design/web-vue'
import 'echarts-liquidfill'
// import '@arco-themes/vue-shuqinco2/index.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
Message._context = app._context
