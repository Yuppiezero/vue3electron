<template>
  <a-space size="medium">
    <channel v-model="config.test" :func="device.setSensorTest" />
    <!--
    <sensor v-model="config.fromDevice" />
    -->
    <a-button>被测传感器</a-button>

    <channel v-model="config.standard" :func="device.setSensorStandard" />
    <!--
    <sensor v-model="config.toDevice" />
    -->
    <a-button>标准传感器</a-button>

    <show-channel />
    <a-space size="small">
      <a-typography-text>示波器:</a-typography-text>
      <a-switch v-model="device.isRunning">
        <template #checked>
          开
        </template>
        <template #unchecked>
          关
        </template>
      </a-switch>
    </a-space>
  </a-space>
</template>

<script setup>
import Channel from "@/components/device/channel.vue";
import {reactive} from "vue";

import ShowChannel from "@/components/device/show-channel.vue";
import {useDeviceStore} from "@/store/modules/device";

const device = useDeviceStore()
const config = reactive({
  test: device.test,
  standard: device.standard,
})
</script>
