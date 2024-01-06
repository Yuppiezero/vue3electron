<template >
  <a-card :bordered="false">
    <!-- <h2 class="viewH2">设备监控</h2> -->
      <div class="flexstretch ">
        <div class="stretchbox column" style="margin-right: 10px;">
          <a-card :bordered="false" style="background-color:rgba(242,243,245,0.5); flex: 0.5;">
            <div class="stretchbox spacebetween flexstretch" style="flex: 1;">
              <div style="flex:0.7;">
                <p class="summarytitle">总GPU已分配 / GPU总量</p>
                <div class="stretchbox spacebetween flexstretch" style="text-align: center;">
                  <a-statistic title="GPU已分配" :value="8796" animation  style="flex:0.5;text-align: center;"/>
                  <div class="direction-vertical"></div>
                  <a-statistic title="GPU总量" :value="8796" animation style="flex:0.5;text-align: center;"/>
                </div>
              </div>
              <WaterPolo :xdata="[0.34]" style="flex:0.3"/>
            </div>
          </a-card>
          <a-card :bordered="false" style="background-color:rgba(242,243,245,0.5); flex: 0.5; margin-top: 20px;">
            <div class="stretchbox spacebetween flexstretch" style="flex: 1;">
              <div style="flex:0.7;">
                <p class="summarytitle">总内存已分配 / 内存总量</p>
                <div class="stretchbox spacebetween flexstretch" style="text-align: center;">
                  <a-statistic title="总内存已分配" :value="8796" animation  style="flex:0.5;text-align: center;"/>
                  <div class="direction-vertical"></div>
                  <a-statistic title="内存总量" :value="8796" animation style="flex:0.5;text-align: center;"/>
                </div>
              </div>
              <WaterPolo :xdata="[0.34]" style="flex:0.3"/>
            </div>
          </a-card>
        </div>
        <div class="stretchbox column" style="margin-left: 10px;">
          <a-card :bordered="false" style="background-color:rgba(242,243,245,0.5); flex: 0.5;">
            <div class="stretchbox spacebetween flexstretch" style="flex: 1;">
              <div style="flex:0.7;">
                <p class="summarytitle">总存储已分配 / 存储总量</p>
                <div class="stretchbox spacebetween flexstretch" style="text-align: center;">
                  <a-statistic title="总存储已分配" :value="8796" animation  style="flex:0.5;text-align: center;"/>
                  <div class="direction-vertical"></div>
                  <a-statistic title="存储总量" :value="8796" animation style="flex:0.5;text-align: center;"/>
                </div>
              </div>
              <WaterPolo :xdata="[0.34]" style="flex:0.3"/>
            </div>
          </a-card>
          <a-card :bordered="false" style="background-color:rgba(242,243,245,0.5); flex: 0.5; margin-top: 20px;">
            <div class="stretchbox spacebetween flexstretch" style="flex: 1;">
              <div style="flex:0.7;">
                <p class="summarytitle">总CPU已分配 / CPU总量</p>
                <div class="stretchbox spacebetween flexstretch" style="text-align: center;">
                  <a-statistic title="总CPU已分配" :value="8796" animation  style="flex:0.5;text-align: center;"/>
                  <div class="direction-vertical"></div>
                  <a-statistic title="CPU总量" :value="8796" animation style="flex:0.5;text-align: center;"/>
                </div>
              </div>
              <WaterPolo :xdata="[0.34]" style="flex:0.3"/>
            </div>
          </a-card>
      </div>
       <div class="stretchbox cardpanel">
          <p>健康指数</p>
          <Rada />
       </div>
      </div>
  </a-card>
  <a-card :bordered="false">
    <div class="spacebetween">
      <div style="flex: 0.6;padding-left: 20px;">
        <p class="subtitle">实时带宽</p>
        <Memory :height="'300px'"/>
      </div>
      <div style="flex:0.4">
        <p class="subtitle" style="width: 90%;float: right;">网络流量</p>
        <div class="column">
          <div class="columnbox">
            <Gauge xdata="46" title="接收" color="#84CFD6" border-color="#48B8C1" />
          </div>
          <div  class="columnbox">
            <Gauge xdata="1" title="发送"  color="#F5B473" border-color="#F29D48"/>
          </div>
        </div>
            
      </div>
    </div>
  </a-card>
</template>
<script setup>
import { ref } from 'vue';
import WaterPolo from "@/components/echarts/waterPolo.vue"
import Rada from '@/components/echarts/radar.vue'
import Memory from '@/components/echarts/memory.vue'
import Gauge from '@/components/echarts/gauge.vue'
</script>
<style lang='less' scoped>
.flexstretch{
  display: flex;
  align-items: stretch;
  .stretchbox {
    flex: 0.32;
  }
}
.summarytitle{
  font-size: 15px;
  margin-bottom: 20px;
  text-indent: 10px;
}
.column{
  display: flex;
  flex-direction: column;
  width: 100%;
  .columnbox{
    width: 100%;
    flex: 0.5;
    height: 50%;
    align-items: center;
    justify-content: center;
  }
}
.cardpanel{
  padding:0 20px;
  p {
    line-height: 1.5715;
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-neutral-3);
    text-indent: 4px;
  }
}
.subtitle{
  line-height: 1.5715;
  font-size: 16px;
  padding-bottom: 10px;
}
</style>