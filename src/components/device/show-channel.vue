<template>
  <a-trigger trigger="click">
    <a-button>显示通道</a-button>
    <template #content>
      <div class="show-channel">
        <a-row justify="space-between" align="center" :gutter="10">
          <span>CH1 频谱</span>
          <a-switch v-model="CH1.freq" @update:modelValue="save('CH1', 'freq', $event)"></a-switch>
          <span>CH1 波形</span>
          <a-switch v-model="CH1.time" @update:modelValue="save('CH1', 'time', $event)"></a-switch>
          <span>CH2 频谱</span>
          <a-switch v-model="CH2.freq" @update:modelValue="save('CH2', 'freq', $event)"></a-switch>
          <span>CH2 波形</span>
          <a-switch v-model="CH2.time" @update:modelValue="save('CH2', 'time', $event)"></a-switch>
        </a-row>
      </div>
    </template>
  </a-trigger>
</template>

<script setup>
import {useDeviceStore} from "@/store/modules/device";
import {reactive} from "vue";

const device = useDeviceStore()

const CH1 = reactive({
  freq: false,
  time: false
})
const CH2 = reactive({
  freq: false,
  time: false
})

const save = (channel, field, bool) => {
  device.setShowChannel(channel, field, bool)
}
</script>

<style lang="less">
.show-channel{
  width: 150px;
  padding: 10px 20px;
  background: white;
  border-radius: 4px;
  margin-top: 5px;
  box-shadow: 0 0 1px #000;

  .arco-row {
    gap: 10px;
  }
  .arco-switch-checked {
    background-color: #009758;
  }
}
</style>
