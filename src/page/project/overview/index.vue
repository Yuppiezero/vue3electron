<template >
  <a-card :bordered="false">
    <h2 class="viewH2">概览</h2>
    <a-row justify="space-between" :gutter="{ xs: 4, sm: 6, md: 12}">
      <a-col :span="10">
        <a-card :bordered="false"  style="background-color:rgba(242,243,245,0.5);height: 250px;">
          <a-statistic title="已接入算力" :value="8796" animation>
            <template #suffix> POps@FP16 </template>
          </a-statistic>
          <a-divider  style="margin-bottom: 20px;"/>
          <a-row justify="space-between" :gutter="{ xs: 4, sm: 6, md: 12}">
            <a-col :span="14">
              <a-statistic title="我的算力" :value="1.342" :precision="3" animation>
                <template #suffix> POps@FP16 </template>
              </a-statistic>
            </a-col>
            <a-col :span="8">
              <a-statistic title="算力占比" :value="12.34" >
                <template #suffix> % </template>
              </a-statistic>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="14">
        <a-card :bordered="false" style="background-color:rgba(242,243,245,0.5)">
          <div class="flexItem spacebetween" style="align-items:stretch">
            <div class="flexItem" style="flex:0.4">
              <a-statistic title="今日实时收益" :value="234.98" :precision="2" animation style="flex: 1;">
                <template #prefix> ￥ </template>
              </a-statistic>
            </div>
            <div class="direction-vertical"></div>
            <div class="flexItem" style="flex:0.4">
              <a-statistic title="历史总收益" :value="32134.32"  :precision="2" animation style="flex: 1;">
                <template #prefix> ￥ </template>
              </a-statistic>
            </div>
          </div>
          <a-list :bordered="false">
            <template #header> 当前任务 </template>
            <a-list-item>
              <template #meta>
                <p class="spacebetween" style="width: 70%;">
                  <span>202306201276task00234text001</span>
                  <span>进行中</span>
                </p>
              </template>
              <template #actions>预估收益 23.32</template>
            </a-list-item>
            <a-list-item>
              <template #meta>
                <p class="spacebetween" style="width: 70%;">
                  <span>202306201276task00234text001</span>
                  <span>进行中</span>
                </p>
              </template>
              <template #actions>预估收益 23.32</template>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
    <h2 class="H2view">我的设备</h2>
    <a-table :columns="columns" :data="listData" :pagination="false">
      <template #linkNode="{record}">
        <a-link>{{ record.a8 }}</a-link>
      </template>
      <template #optional="{ record }">
        <a-button type="text">停止</a-button>
        <a-button type="text">修改</a-button>
      </template>
    </a-table>
    <h2 class="H2view">我的算力</h2>
    <Chart :xdata="xdata" :ydata="ydata" height="350px"/>
  </a-card>
</template>
<script setup>
import { ref } from 'vue'
import Chart from "@/components/echarts/arealine.vue"
const xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const ydata = [820, 932, 901, 934, 1290, 1330, 1320]
const columns = [
  {
    title: '设备名称',
    align: 'center',
    dataIndex: 'a1',
  },
  {
    title: '显卡型号',
    align: 'center',
    dataIndex: 'a2',
  },
  {
    title: '显存',
    align: 'center',
    dataIndex: 'a3',
  },
  {
    title: '内存大小',
    align: 'center',
    dataIndex: 'a4',
  },
  {
    title: '实时算力',
    align: 'center',
    dataIndex: 'a5',
  },
  {
    title: '拒绝率',
    align: 'center',
    dataIndex: 'a6',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'a7',
  },
  {
    title: '接入节点',
    align: 'center',
    dataIndex: 'a8',
    slotName: 'linkNode'
  },
  {
    align: 'center',
    title: '操作',
    slotName: 'optional'
  }
]
const listData = [{
  a1: '戴尔G15',
  a2: 'GTX3060',
  a3: '11G',
  a4: '32G',
  a5: '11.3 TFLOPS',
  a6: '2%',
  a7: '运行中',
  a8: '杭州AI算力节点'
}]
</script>
<style lang='less' scoped>
</style>