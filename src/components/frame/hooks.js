import { useRouter } from "vue-router";
import {computed, nextTick, ref, watch} from "vue";
import { useIpcRenderer } from "@vueuse/electron";

export function useCurrentPath() {
  const ipcRenderer = useIpcRenderer();
  const router = useRouter()
  const currentUrl = ref(router.currentRoute.value.path)

  const isMax = ref(false)

  watch( () => router, () => {
    // console.log('当前路径', router.currentRoute.value.fullPath)
    const path = router.currentRoute.value.path
    currentUrl.value = path
    if(path === '/' || path === '/login'){
      ipcRenderer.send('setsize', 'min')
    } else {
      nextTick(() => {
        if(!isMax) {
          isMax.value = true
          ipcRenderer.send('setsize', 'max')
        }
      }).then(() => {})
    }
  },{ deep: true, immediate: true })

  // 是否已登录
  const isEnter = computed(() => !['/', '/login'].includes(currentUrl.value))
  // 顶部 class
  const topClass = computed(() => isEnter.value ? '' : 'bgalpha')

  return {
    currentUrl, isEnter, topClass
  }
}
