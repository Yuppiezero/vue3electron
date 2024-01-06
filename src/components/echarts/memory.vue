<template >
  <div class="echartPanel" ref="dom" :style="{ width, height:'300px', paddingBottom: '50px' }"></div>
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
  color: ['#84CFD6', '#F5B473'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['接收', '发送'],
    bottom:'-20px',
    height: 600,
    padding: [60,20,20,20]
  },
  grid: {
    left: '0',
    top: '4%',
    right: '1%',
    bottom: '6%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel:{ rotate : 60 },
      data: ['2:39:09pm', '2:39:21pm', '2:39:33pm', '2:39:45pm', '2:39:57pm', '2:40:09pm', '2:40:21pm', '2:40:33pm', '2:40:45pm', '2:40:57pm', '2:41:09pm', '2:41:21pm', '2:41:33pm', '2:41:45pm', '2:41:57pm', '2:42:09pm', '2:42:21pm', '2:42:33pm', '2:42:45pm', '2:42:57pm', '2:43:09pm', '2:43:21pm', '2:43:33pm', '2:43:45pm', '2:43:57pm', '2:44:09pm', '2:44:21pm', '2:44:33pm', '2:44:45pm', '2:44:57pm', '2:45:09pm', '2:45:21pm', '2:45:33pm', '2:45:45pm', '2:45:57pm', '2:46:09pm', '2:46:21pm', '2:46:33pm', '2:46:45pm', '2:46:57pm', '2:47:09pm', '2:47:21pm', '2:47:33pm', '2:47:45pm']
    }
  ],
  yAxis: [
    {
      type: 'value',
      max: 0.2,
      min: -0.1,
      axisLabel: {
          formatter: (value, index)=>{
            if(value==0.2||value==-0.1) {
              return `${value} MBI/s`
            } else {
              return value
            }
          }
      }
    }
  ],
  series: [
    {
      name: '接收',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: '#84CFD6'
      },
      emphasis: {
        focus: 'series'
      },
      data:  [0.02,0.01,0.02,0.01,0.03,0.013,0.010,0.01,0.02,0.02,0.05,0.01,0.03,0.08,0.03,0.006,0.02,0.05,0.07,0.02,0.02,0.01,0.01,0.03,0.013,0.010,0.01,0.02,0.02,0.07,0.01,0.03,0.08,0.03,0.01,0.02,0.05,0.07,0.013,0.010,0.01,0.02,0.01]
    },
    {
      name: '发送',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: '#F5B575'
      },
      emphasis: {
        focus: 'series'
      },
      data: [-0.01,-0.04,-0.02,-0.01,-0.04,-0.01,-0.03,-0.03,-0.04,-0.02,-0.02,-0.04,-0.01,-0.03,-0.02,-0.01,-0.03,-0.01,-0.03,-0.02,-0.01,-0.02,-0.03,-0.02,-0.04,-0.03,-0.02,-0.01,-0.01,-0.02,-0.02,-0.02,-0.01,-0.02,-0.03,-0.03,-0.03,-0.03,-0.03,-0.04]
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
