<template>
  <!-- 顶部标题 缩小、放大、关闭 -->
  <div :class="`allpage ${path=='/' || path=='/login' ? 'loginbg' : ''}`">
    <top-bar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import TopBar from "@/components/frame/top-bar.vue"
import { useRouter } from "vue-router";
const router = useRouter()
const path = ref('')
watch(() =>  router,
  (newValue,oldValue) => {
    path.value = router.currentRoute.value.path
  },
  { deep: true, immediate: true }
)
</script>
<style lang="less">
.loginbg{
  width: 100%;
  height: 100vh;
  background:#C3EDFF url('./assets//img/panelbg.jpg') right top no-repeat;
  .controbutton {
    text-shadow: 0 4px 3px rgb(235, 227, 227) !important;
  }
}
.topBar{
  color: #707070 !important;
  .titleBar,.controbutton {
    color: #707070;
  }
  .controbutton {
    font-size: 18px;
    color: #8a8a8a !important;
    font-weight: bolder;
    cursor: pointer;
    &:hover {
      color: #413939 !important;
      font-weight: bolder;
      text-shadow: 0 4px 3px rgb(235, 227, 227) !important;
      cursor: pointer;
    }
  }
  .icon-icon-close{
    &:hover {
      color: #ee0505 !important;
    }
  }
}
</style>
