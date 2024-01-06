<template>
  <a-select :model-value="props.modelValue" @change="change" class="channel-select">
    <a-option v-for="v in channels" :value="v" :label="v" />
  </a-select>
</template>

<script setup>
/**
 * 传感器选择
 */
const channels = ['被测传感器', '标准传感器', '未接入']

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const change = ($event) => {
  emit('update:modelValue', $event)
}
</script>

