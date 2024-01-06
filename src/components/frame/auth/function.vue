<template>
  <a-modal v-model:visible="props.modelValue"
           title-align="start" :footer="false"
           :width="1000"
           @ok="ok" @cancel="close">
    <template #title>功能管理</template>

    <a-table :columns="columns" :data="data" :pagination="false">
      <template #handler="{ record, rowIndex }">
        <a-space>
          <a-button type="text">编辑</a-button>
        </a-space>
      </template>
    </a-table>
  </a-modal>
</template>

<script>
export default {
  name: "auth-function"
}
</script>

<script setup>
import {reactive} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const close = () => emit('update:modelValue', false)
const ok = () => {
  emit('update:modelValue', false)
}

const columns = [
  { title: '功能名称', dataIndex: 'name', align: 'center' },
  { title: '功能编码标识', dataIndex: 'tag', align: 'center' },
  { title: '创建时间', dataIndex: 'created_at', align: 'center' },
  { title: '更新时间', dataIndex: 'updated_at', align: 'center' },
  { title: '状态', dataIndex: 'status', align: 'center' },
  { title: '操作', align: 'center', slotName: 'handler' },
]

const data = reactive([
  {name: '超声波（AE）', tag: 'ae', created_at: '2023-07-01 10:10:10', updated_at: '2023-07-01 12:12:12', status: '停用、启用'}
])
</script>

<style lang="less">

</style>
