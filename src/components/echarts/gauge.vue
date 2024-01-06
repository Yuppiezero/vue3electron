<template >
  <div class="echartPanel" ref="dom" :style="{ width: '350px', height: '175px',margin: '0 auto' }"></div>
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
    default: '120px', //默认值
  },
  width: {
    type:String,
    default: '120px', //默认值
  },
  title: {
    type:String,
    default: '', //默认值
  },
  borderColor: {
    type:String,
    default: '', //默认值
  },
  color: {
    type:String,
    default: '', //默认值
  },
  xdata:  {
    type:String,
    default: '20'
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
  series: [
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 200,
      splitNumber: 12,
      grid: {
        left: '0',
        top: '0',
        right: '0',
        bottom: '0'
      },
      itemStyle: {
        color: props.color
      },
      progress: {
        show: true,
        width: 12
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 12
        }
      },
      axisTick: {
        distance: -45,
        splitNumber: 5,
        lineStyle: {
          width: 0,
          color: '#999'
        }
      },
      splitLine: {
        distance: -52,
        length: 0,
        lineStyle: {
          width: 0,
          color: '#999'
        }
      },
      axisLabel: {
        distance: -20,
        color: '#999',
        fontSize: 0,
        show: false
      },
      anchor: {
        show: false
      },
      title: {
        show: true,
        offsetCenter: [0, '-10%'],
        fontSize: 20
      },
      detail: {
        valueAnimation: true,
        width: '100%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, '-15%'],
        fontSize: 20,
        fontWeight: '500',
        formatter: '{value} KIB/s ',
        color: 'inherit'
      },
      data: [
        {
          value: props.xdata
        }
      ]
    },
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 200,
      itemStyle: {
        color: props.borderColor
      },
      progress: {
        show: true,
        width: 4
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: props.xdata,
          name: props.title
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
