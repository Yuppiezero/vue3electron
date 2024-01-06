<template>
  <a-dropdown @select="handle">
    <p>权限管理</p>
    <template #content>
      <a-doption value="user">人员管理</a-doption>
      <a-doption value="function">功能管理</a-doption>
    </template>
  </a-dropdown>

  <!-- 人员管理 -->
  <auth-user v-model="modal.user" />
  <!-- 功能管理 -->
  <auth-function v-model="modal.function" />
</template>

<script>
export default {
  name: "auth-menu"
}
</script>

<script setup>
import {reactive} from "vue";
import AuthUser from "@/components/frame/auth/user.vue";
import AuthFunction from "@/components/frame/auth/function.vue";

const modal = reactive({
  user: false,
  function: false,
})

const handle = (v) => {
  if (!v) return
  modal[v] = true
}
</script>

<style lang="less">

</style>
