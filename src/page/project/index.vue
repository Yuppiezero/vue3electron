<template>
  <div class="flexItem toppanel">
    <div class="flexLfet flexItem topControlPanel">
      <type-menu />
    </div>
    <div class="flexCenter flexItem">
      <device-config />
    </div>
    <div class="flexRight flexItem">
      <!--
      <a-space>
        <a-button>自动同步</a-button>
        <a-typography-text>50Hz</a-typography-text>
      </a-space>
      -->
    </div>
  </div>
  <div class="flexItem centerPanel">
    <div class="flexLfet vileft flexmenu">
      <p v-for="(item, index) in menus" :key="index" @click="redirect(`/${frame}${item.path}`)"
         class="menuitem" :class="{ current: getCurrent(item.path)}">
        <i class="iconfont " v-if="item.icon" :class="item.icon" />{{ item.title }}
      </p>
    </div>
    <div class="flexMain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-index",
}
</script>

<script setup>
import TypeMenu from "@/components/frame/type-menu.vue";
import DeviceConfig from "@/components/device/device-config.vue";
import {useRouter} from "vue-router";
import {computed, watch} from "vue";
import {allMenus, useTypeStore} from "@/store/modules/types";
import {storeToRefs} from "pinia";
import {useConfigStore} from "@/store/modules/config";

const router = useRouter()
const { currentRoute } = router

const getCurrent = (path) => {
  return currentRoute.value.path.endsWith(path)
}

const store = useTypeStore()
const { frame } = storeToRefs(store)
const redirect = (path) => {
  router.push(path)
}

const config = useConfigStore()
const { standard } = storeToRefs(config)
// 过滤当前是否有行业标准菜单
const hasHB = computed(() => (allMenus[frame.value] || []).filter(item => item.name.includes('Sub_')))
const menus = computed(() => {
  const filter = (allMenus[frame.value] || []).filter(item => {
    // 企业标准
    if (standard.value === 'gb') {
      return !item.name.includes('Sub_')
    }
    // 当前项目下有行业标准菜单则显示
    // 否则显示所有
    return hasHB.value.length ? item.name.includes('Sub_') : item
  })
  return filter.map(item => ({...item, path: `/${item.path}`, icon: `icon-${item.icon}`}))
})

watch(menus, (v) => {
  redirect(`/${frame.value}${v[0].path}`)
}, { immediate: true })
</script>

<style lang="less">
.flexLfet,.flexRight{
  width: 180px;
  height: 50px;
}
.flexMain{
  flex: 1;
  height:calc(100vh - 152px);
}
.flexCenter{
  width: calc(100% - 220px);
  height: 50px;
  flex:1;
}
.toppanel{
  height:60px;
  background-color: #005558;
  color:#fff;
}
.flexcolumn{
  flex-direction: column;
}
.centerPanel{
  height:calc(100vh - 152px);
  .flexLfet,.flexRight,.flexCenter{
    height:calc(100vh - 152px);
  }
}
</style>
