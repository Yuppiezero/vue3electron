<template >
  <a-card  :bordered="false">
    <a-row justify="space-between" class="tasklist" :gutter="{ md: 8, lg: 24, xl: 32 }">
      <a-col :span="6">
        <a-statistic title="已完成任务" :value="98763" animation  />
      </a-col>
      <a-col :span="6" >
        <a-statistic title="总收益" :value="232134.32" :precision="2" animation >
          <template #prefix> ￥ </template>
        </a-statistic>
      </a-col>
      <a-col :span="6" >
        <a-statistic title="平均任务收益" :value="34.32" :precision="2" animation >
        <template #prefix> ￥ </template>
        </a-statistic>
      </a-col>
      <a-col :span="6" >
        <div class="arco-statistic arco-statistic-countdown">
          <div class="arco-statistic-title">平均任务耗时</div>
          <div class="arco-statistic-content">
            <div class="arco-statistic-value">45m14s</div>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-table :columns="columns" :data="data" style="margin: 30px 0;"/>
    <a-typography-title :heading="6" style="margin:20px 0; text-indent: 20px; letter-spacing: 3px;">已完成任务统计</a-typography-title>
    <CategoryStack  height="500"/>
  </a-card>
</template>
<script setup>
import { ref } from 'vue';
import CategoryStack from "@/components/echarts/categoryStack.vue"
const now = Date.now();
const data = [
  { name: 'task001', hard: '高', status: '队列中', receive: '2023/08/07 10:00', startTime: '--', endTime: '--', consuming: '--', estimate: '￥345', actualSituation: '--' },
  { name: 'task002', hard: '中', status: '训练中', receive: '2023/08/02 10:00', startTime: '2023/08/02 11:00', endTime: '2023/08/03 10:00', consuming: '23h', estimate: '￥632', actualSituation: '--' },
  { name: 'task003', hard: '低', status: '已结束', receive: '2023/08/01 10:00', startTime: '2023/08/01 21:00', endTime: '2023/08/02 10:00', consuming: '13h', estimate: '￥232', actualSituation: '￥292' },
  { name: 'task004', hard: '中', status: '已结束', receive: '2023/08/01 10:00', startTime: '2023/08/01 21:00', endTime: '2023/08/02 10:00', consuming: '13h', estimate: '￥232', actualSituation: '￥292' },
  { name: 'task005', hard: '低', status: '已结束', receive: '2023/08/01 10:00', startTime: '2023/08/01 21:00', endTime: '2023/08/02 10:00', consuming: '13h', estimate: '￥232', actualSituation: '￥292' }
]
const columns = [
  { title: '任务名称', dataIndex: 'name', align: 'center' },
  { title: '难度等级', dataIndex: 'hard', align: 'center' },
  { title: '状态', dataIndex: 'status', align: 'center' },
  { title: '接收时间', dataIndex: 'receive', align: 'center' },
  { title: '开始时间', dataIndex: 'startTime', align: 'center' },
  { title: '结束时间', dataIndex: 'endTime', align: 'center' },
  { title: '任务耗时', dataIndex: 'consuming', align: 'center' },
  { title: '预估收益', dataIndex: 'estimate', align: 'center' },
  { title: '实际收益', dataIndex: 'actualSituation', align: 'center' }
]
</script>
<style lang='less' scoped>
.tasklist {
  .arco-statistic {
    background-color: rgba(242, 243, 245, 0.5);
    width: 100%;
    height: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>