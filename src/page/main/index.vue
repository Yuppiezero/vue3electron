<template>
  <div class="headtop spacebetween" style="align-items: center;">
    <ul class="flexItem">
      <li :class="path=='/overview' ? 'current':''" @click="topush('/overview')">
        <span class="overviewicon"></span>
        <span>设备概览</span>
      </li>
      <li :class="path=='/monitor' ? 'current':''"  @click="topush('/monitor')">
        <span class="monitoricon"></span>
        <span>设备监控</span>
      </li>
      <li :class="path=='/example' ? 'current':''"  @click="topush('/example')">
        <span class="exampleicon"></span>
        <span>算力接入</span>
      </li>
      <li :class="path=='/task' ? 'current':''"  @click="topush('/task')">
        <span class="taskicon"></span>
        <span>任务管理</span>
      </li>
      <li :class="path=='/income' ? 'current':''"  @click="topush('/income')">
        <span class="incomeicon"></span>
        <span>收益结算</span>
      </li>
    </ul>
    <a-dropdown position="bottom">
      <a-avatar :size="32">
        <img alt="avatar" src="../../assets/img/boy-80.png" />
      </a-avatar>
    </a-dropdown>
  </div>
  <div class="maincenter">
   <router-view></router-view> 
  </div>
</template>
<script setup>
import { onMounted, nextTick, ref, watch } from 'vue'
import { useIpcRenderer } from "@vueuse/electron"
import { useRouter } from "vue-router";
const ipcRenderer = useIpcRenderer()
const router = useRouter()
const path = ref('')
watch(() =>  router,
  (newValue,oldValue) => {
    path.value = router.currentRoute.value.path
  },
  { deep: true, immediate: true }
)
const topush = (item) => {
  router.push({
    path: item
  })
}
const exit = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refresh_token')
  router.push({
    path: "/login"
  })
}
onMounted(()=>{
  nextTick(()=>{
    ipcRenderer.send('show', '')
    ipcRenderer.send('setsize', 'max')
  })
})
</script>

<style lang='less' scoped>
.maincenter {
  height: calc(100vh - 200px);
  overflow: hidden;
  overflow-y: auto;
  padding-bottom: 30px;
  background-color: #fff;
}
.headtop{
  margin:20px 30px;
  ul{
    list-style: none;
    li{
      list-style: none;
      width: 120px;
      height: 60px;
      text-align: center;
      position: relative;
      cursor: pointer;
      .overviewicon,.monitoricon,.exampleicon,.incomeicon,.taskicon {
        display: block;
        width:31px;
        height: 31px;
        background: url('../../assets/img/icon.png') no-repeat;
        margin: 0 auto;
        margin-bottom: 3px;
      }
      .monitoricon{
        background-position: -119px 0;
      }
      .exampleicon {
        background-position: -236px 0;
      }
      .taskicon{
        background-position: -350px 0;
      }
      .incomeicon{
        background-position: -490px 0;
      }
    }
    .current {
      cursor: default;
      &::before {
        content: '';
        border-radius: 8px;
        height: 2px;
        width: 50%;
        position: absolute;
        bottom: 1px;
        margin: 0 auto;
        background: #06f;
        left: 26%;
      }
    }
  }
}
</style>
