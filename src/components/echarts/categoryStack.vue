<template >
  <div class="echartPanel" ref="dom" :style="{ width, height:'500px' }"></div>
</template>
<script>
export default {
  name: 'chart'
}
</script>
<script setup>
import {onMounted, nextTick, ref, watch, markRaw} from "vue";
import * as echarts from "echarts";
// xAxis 是竖着的数据 也就是底部的 label
// ydata 多组数据 [{ name: '2011', type: 'bar', data: [18203, 23489, 29034, 104970, 131744, 630230] }]
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([ TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer ]);
const timeStamp = Date.now()
/** 柱状图表
 @param {number} height 高度
 @param {number}  width 宽度
 @param {string} title 图表标题
 @param {array} xData 底部横线X轴label
 @param {array} YData 底部横线X轴上数据，可以是多组
 @example 多组：[{ name: '2011', type: 'bar', data: [18203, 23489, 29034, 104970, 131744, 630230] }]
 @example 单组：[18203, 23489, 29034, 104970, 131744, 630230]
 @param {bool} complicated 多组复合数据 默认：是
 */
const props = defineProps({
  height: {
    type:String,
    default: '500px', //默认值
  },
  width: {
    type:String,
    default: '100%', //默认值
  },
  title: {
    type:String,
    default: '', //默认值
  },
  xdata:  {
    type: Array,
    required: true,
    validator: value => Array.isArray(value)
  },
  ydata: {
    type: Array,
    required: true,
    validator: value=> Array.isArray(value)
  },
  complicated: {
    type: Boolean,
    default: true,
    validator: value=> {
      return value.constructor === Boolean
    }
  },
})

const range = (start, stop, step = 1) =>  Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)

const dom = ref(null)
const myChart = ref(null)
const initChart = () => {
  myChart.value = markRaw(echarts.init(dom.value, null, { renderer: 'canvas' }));
}
const showChart = () => {
  const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {
      name: '高难度任务',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '中难度任务',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '低难度任务',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}
  option && myChart.value.setOption(option);
}

onMounted(() => {
  nextTick(() => {
    initChart()
  })
})


let timer
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    if (myChart.value) myChart.value.resize()
  }, 100)
})
watch([props, myChart], () => {
  if (myChart.value) showChart()
}, { immediate: true })
</script>
<style lang='less'>
.echartPanel{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1
}
</style>
