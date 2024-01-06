<template>
  <a-modal v-model:visible="props.modelValue"
           title-align="start" :footer="false"
           :width="1000"
           @ok="ok" @cancel="close">
    <template #title>人员管理</template>

    <a-table :columns="columns" :data="data" :pagination="false">
      <template #handler="{ record, rowIndex }">
        <a-space>
          <a-button type="text">详情</a-button>
          <a-button type="text">编辑</a-button>
          <a-button type="text">删除</a-button>
        </a-space>
      </template>
    </a-table>
  </a-modal>
</template>

<script>
export default {
  name: "auth-user"
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
  { title: '编号', dataIndex: 'id', align: 'center' },
  { title: '用户名称', dataIndex: 'username', align: 'center' },
  { title: '角色', dataIndex: 'role', align: 'center' },
  { title: '创建时间', dataIndex: 'created_at', align: 'center' },
  { title: '状态', dataIndex: 'status', align: 'center' },
  { title: '操作', align: 'center', slotName: 'handler' },
]

const data = reactive([
  {id: 1, username: 'admin', role: 'super', created_at: '2023-07-01 10:10:10', status: '正常'}
])
</script>

<style lang="less">

</style>
