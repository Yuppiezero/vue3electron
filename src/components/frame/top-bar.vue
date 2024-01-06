<template>
  <div class="topBar" :class="topClass">
    <div class="titleBar" :class="topClass">
      <div class="iconimg">算力</div>
    </div>
    <div class="panel-btn">
      <div class='controbutton iconfont icon-window-min_line' @click="operationWindow('min')"></div>
      <div v-if="isEnter"
           class="controbutton iconfont"
           :class="!isMax ? 'icon-window-window_line' : 'icon-window-max_line'" @click="operationWindow(!isMax ? 'max':'restore')"></div>
      <div class='controbutton iconfont icon-icon-close' @click="operationWindow('close')"></div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted,nextTick } from 'vue';
import { useIpcRenderer } from "@vueuse/electron";
import { useRouter } from "vue-router";
import {useCurrentPath} from "@/components/frame/hooks";
const router = useRouter()
const ipcRenderer = useIpcRenderer();

const { currentUrl, isEnter, topClass} = useCurrentPath()

let isMax = ref(false)
const operationWindow = (value) => {
  ipcRenderer.send(value, "");
}
ipcRenderer.on('watchSize', (event, arg) => {
  isMax.value = arg !== 'max' // prints "pong"
})

onMounted(()=>{
  console.log(currentUrl.value)
  if(currentUrl.value === '/' || currentUrl.value === '/login'){
    ipcRenderer.send('setsize', 'min')
  } else if(currentUrl.value === '/ae/sensor') {
    ipcRenderer.send('setsize', 'max')
  }
  nextTick(()=>{
    ipcRenderer.send('show', '')
  })
})
</script>

<style>
.iconimg {
  background: url('../../assets/img/topicon.png') left center no-repeat;
  width: 120px;
  height: 32px;
  margin-top: 4px;
  text-indent: 32px;
  line-height: 36px;
}
</style>
