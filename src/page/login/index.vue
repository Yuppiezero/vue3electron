<script setup>
import {onMounted, reactive} from 'vue'
import { useRouter } from "vue-router"
import { useIpcRenderer } from "@vueuse/electron";
import {login} from "@/api/user";
const ipcRenderer = useIpcRenderer();
const router = useRouter()
// const form = reactive({
//   username: process.env.NODE_ENV === 'development' ? 'admin' : '',
//   password: process.env.NODE_ENV === 'development' ? 'Admin@123456' : '',
// });
const form = reactive({
  username: '',
  password: '',
  msg: ''
});
const handleSubmit = () => {
  const { username, password } = form
  // login({ username, password }).then(res => {
  //   const {access_token, refresh_token} = res || {}
  //   if (access_token && refresh_token) {
      localStorage.setItem('token', '123456')
      localStorage.setItem('refresh_token', '123456')
      ipcRenderer.send('login', '')
      router.push({
        path: "/home"
      })
  //   }
  // }).catch(err => console.log(err))
}

onMounted(() => {
  localStorage.removeItem('token')
  localStorage.removeItem('refresh_token')
})
</script>

<template>
  <div class="spacebetween">
    <div class="sloganleft">
      <img src="../../assets/img/slogan.png">
    </div>
    <div class="loginform">
      <img src="../../assets/img/loginlogo.png" class="toplogo">
      <a-typography-title :heading="6" style="text-align: center;margin: 40px auto;letter-spacing: 3px;">登录云算力中心</a-typography-title>
      <a-tabs default-active-key="1" :style="{ width: '360px', margin: '0 auto' }">
        <a-tab-pane key="1" title="帐户密码登录">
          <a-form :model="form" :style="{ width: '320px', margin: '0 auto',marginTop: '20px' }">
            <a-form-item field="username" hide-label tooltip="Please enter username" label="用户名">
              <a-input v-model="form.username" size="large" placeholder="请输入用户名" allow-clear>
                <template #prefix> <icon-user /> </template>
              </a-input>
            </a-form-item>
            <a-form-item hide-label field="password" label="密码">
              <a-input-password v-model="form.password" size="large" placeholder="请输入密码" allow-clear>
                <template #prefix> <icon-lock /> </template>
              </a-input-password>
            </a-form-item>
            <a-form-item hide-label>
              <a-button html-type="submit" size="large" style="margin: 30px auto;width:260px;" :disabled="!form.username||!form.password" type="primary" long @click="handleSubmit">登录</a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" title="手机号登录">
          <a-form :model="form" :style="{ width: '320px', margin: '0 auto', marginTop: '20px' }">
            <a-form-item field="username" hide-label tooltip="Please enter username" label="用户名">
              <a-input v-model="form.username" size="large" placeholder="请输入用户名" allow-clear>
                <template #prefix> <icon-user /> </template>
              </a-input>
            </a-form-item>
            <a-form-item hide-label field="msg" label="请输入手机号">
              <a-input-group>
                <a-input v-model="form.msg" size="large" placeholder="请输入验证码" allow-clear>
                  <template #prefix> <icon-email /> </template>
                </a-input>
                <a-button size="large" style="margin-left: 10px; background-color: #fff;">获取验证码</a-button>
              </a-input-group>
            </a-form-item>
            <a-form-item hide-label>
              <a-button html-type="submit" size="large" style="margin: 30px auto;width:260px;" :disabled="!form.username||!form.password" type="primary" long @click="handleSubmit">登录</a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<style lang="less">
.logoSlogan{
  font-size: 38px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginform{
  :deep(.arco-tabs-nav){
    ::before {
      opacity: 0 !important;
      background-color: transparentn !important;
    }
  }
  .toplogo{
    width: 260px;
    display: block;
    margin: 0 auto;
  }
}
.sloganleft{
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: drag;
  img {
    width: 90%;
    opacity: 0.7;
  }
}

</style>
