<template>
  <div class="spacebetween cardtitle">
    <span>波段</span>
    <!--
    <icon-down />
    -->
  </div>
  <a-space class="wrapper" direction="vertical">
    <a-select v-model="wave.WVTP" :bordered="false"
              v-if="waveOption"
              style="position:relative; padding: 0">
      <a-option v-for="(label, value) in waveOption" :value="value" :label="label" />
    </a-select>
    <div class="arco-space-item pad0">幅值：
      <a-input-number v-model="wave.AMP" :min="0" :max="10" :step="0.1" model-event="input" style="width: 90px" />
      V
    </div>
    <div class="arco-space-item pad0">频率：
      <a-input-number v-model="wave.FRQ" :min="0" :max="500" :step="1" model-event="input" style="width: 90px"/>
      kHz
    </div>
    <div class="arco-space-item pad0">输出方式：
      <a-select v-model="wave.output" :bordered="false" style="padding: 0; width: 110px; position:relative;">
        <a-option v-for="(label, value) in methodOptions" :value="value" :label="label" />
      </a-select>
    </div>
    <slot v-if="wave.output === 'step'" />
  </a-space>
</template>

<script setup>
import {computed, nextTick, onMounted, reactive, watch} from "vue";
import {useWaveStore} from "@/store/wave";
import {storeToRefs} from "pinia";
const store = useWaveStore()
const { WVTP, output, AMP, FRQ } = storeToRefs(store)

const props = defineProps({
  options: {
    type: Object,
    default: () => ({
      sine:'正弦波',
      square:'方波',
      pulse:'脉冲波'
    })
  },
  wave: {
    type: String,
    default: 'sine' // 默认是什么波 sine, square, pulse
  },
  methodOptions: {
    type: Object,
    default: () => ({
      normal: '普通输出',
      step: '步进输出'
    })
  },
  method: {
    type: String,
    default: 'normal', // normal step
  },
})

const waveOption = computed(() => props.options)

const wave = reactive({
  WVTP: props.wave || WVTP,
  output: props.method || output,
  FRQ,
  AMP
})

watch(wave, (v) => {
  store.$patch((state) => {
    state.WVTP = v.WVTP
    state.output = v.output
    state.FRQ = v.FRQ
    state.AMP = v.AMP
  })
}, { immediate:true })

onMounted(() => {
  nextTick(() => {
    store.getWave()
  })
})
</script>

<style lang="less">
.pad0 {
  padding: 0 !important;
}
.step-method {
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: -6px;
}
</style>
