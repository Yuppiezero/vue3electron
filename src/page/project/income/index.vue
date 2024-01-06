<template >
  <a-card  :bordered="false">
    <div class="spacebetween" style="margin:0 auto;margin-bottom:20px;width:99%;">
      <a-typography-title :heading="6" >资金结算</a-typography-title>
      <a-button type="text">立即结算</a-button>
    </div>
    <a-row justify="space-between" class="tasklist" :gutter="{ md: 8, lg: 24, xl: 32 }">
      <a-col :span="6">
        <a-statistic title="今日实时收益" :value="234.98" :precision="2" animation >
          <template #prefix> ￥ </template>
        </a-statistic>
      </a-col>
      <a-col :span="6" >
        <a-statistic title="历史总收益" :value="232134.32" :precision="2" animation >
          <template #prefix> ￥ </template>
        </a-statistic>
      </a-col>
      <a-col :span="6" >
        <a-statistic title="待结算任务" :value="32134.32" :precision="2" animation >
        <template #prefix> ￥ </template>
        </a-statistic>
      </a-col>
      <a-col :span="6" >
        <a-statistic title="可提现金额" :value="32134.32" :precision="2" animation >
          <template #prefix> ￥ </template>
        </a-statistic>
      </a-col>
    </a-row>
    <a-typography-title :heading="6" style="margin-top:20px; text-indent: 2px; letter-spacing: 2px;">收益走势图</a-typography-title>
    <Chart :xdata="xdata" :ydata="ydata" height="350px"/>
    <a-typography-title :heading="6" style="margin-top:20px; text-indent: 2px; letter-spacing: 2px;">资金账单</a-typography-title>
    <a-table :columns="columns" :data="data" style="margin: 30px 0;">
      <template #optional="{ record }">
        <a-button type="text">明细</a-button>
      </template>
    </a-table>
  </a-card>
</template>
<script setup>
import { ref } from 'vue';
import Chart from "@/components/echarts/arealine.vue"
const xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const ydata = [1820, 1932, 1901, 1934, 2290, 2320, 2330]
const columns = [
  { title: '日期', dataIndex: 'dateDay', align: 'center' },
  { title: '总收益', dataIndex: 'totalIncome', align: 'center' },
  { title: '已结算', dataIndex: 'settled', align: 'center' },
  { title: '待结算', dataIndex: 'pendingSettlement', align: 'center' },
  { title: '当日提现金额', dataIndex: 'nowDayCash', align: 'center' },
  { title: '当日余额', dataIndex: 'nowDayBalance', align: 'center' },
  { title: '操作', dataIndex: 'operation', slotName: 'optional' }
]
const data = [
  { dateDay:'2023/08/01', totalIncome: '￥32045', settled: '￥32045', pendingSettlement: '￥32045', nowDayCash: '￥32045', nowDayBalance: '￥32045' },
  { dateDay:'2023/07/31', totalIncome: '￥32045', settled: '￥32045', pendingSettlement: '￥32045', nowDayCash: '￥32045', nowDayBalance: '￥32045' },
  { dateDay:'2023/07/30', totalIncome: '￥32045', settled: '￥32045', pendingSettlement: '￥32045', nowDayCash: '￥32045', nowDayBalance: '￥32045' },
  { dateDay:'2023/07/29', totalIncome: '￥32045', settled: '￥32045', pendingSettlement: '￥32045', nowDayCash: '￥32045', nowDayBalance: '￥32045' },
  { dateDay:'2023/07/28', totalIncome: '￥32045', settled: '￥32045', pendingSettlement: '￥32045', nowDayCash: '￥32045', nowDayBalance: '￥32045' },
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