<template>
  <a-select :model-value="props.modelValue" @change="change" class="channel-select">
    <a-option v-for="v in channels" :value="v" :label="v" />
  </a-select>
</template>

<script setup>
/**
 * 通道选择
 */
const channels = ['CH1', 'CH2', 'CH3', 'CH4']

const props = defineProps({
  modelValue: String,
  func: {
    type: Function,
    default: () => {}
  }
})
const emit = defineEmits(['update:modelValue'])

const change = ($event) => {
  emit('update:modelValue', $event)
  props.func($event)
}
</script>

<style lang="less">
.channel-select{
  background-color: transparent;
  color: white;

  &.arco-select-view-focus {
    background-color: transparent;
    color: white;
  }

  .arco-select-view-icon {
    color: white;
  }
}
</style>
