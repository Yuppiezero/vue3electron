<template >
  <div class="echartPanel" ref="dom" :style="{ width, height }"></div>
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
    default: '100%', //默认值
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
  color: ['#1890FF', '#2FC25B', '#FACC14'],
  radar: {
    // shape: 'circle',
    indicator: [
      { text: 'GPU', max: 150 },
      { text: '内存', max: 150 },
      { text: '存储', max: 150 },
      { text: '带宽', max: 120 },
      { text: '存储', max: 108 }
    ],
    radius: 120,
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [120, 118, 130, 100, 99],
          name: 'Data C',
          symbol: 'rect',
          symbolSize: 12,
          lineStyle: {
            type: 'dashed'
          },
          label: {
            show: true,
            formatter: function (params) {
              return params.value;
            }
          }
        },
        {
          value: [100, 93, 50, 90, 70],
          name: 'Allocated Budget'
        },
        {
          value: [50, 55,52, 65, 75],
          name: 'Actual Spending'
        }
      ]
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
