<template >
  <a-card :bordered="false">
    <a-typography>
      <a-typography-title :heading="6" style="margin-bottom: 10px;">设备配置信息</a-typography-title>
      <a-typography-paragraph style="background-color:rgba(242,243,245,0.8);padding:1px 0 10px 0">
        <a-typography-title :heading="6" style="text-indent: 20px; margin: 20px 0 10px 0;">戴尔G15</a-typography-title>
        <ol>
          <li>1. 处理器（CPU）：Intel Core i7-11800H（第11代酷睿系列）</li>
          <li>2. 内存（RAM）：16GB DDR4 3200MHz</li>
          <li>3. 硬盘（存储器）：512GB PCIe NVMe 固态硬盘</li>
          <li>4. 显卡（GPU）：NVIDIA GeForce RTX 3060 6GB GDDR6</li>
          <li>5. 操作系统：Windows 10 家庭版</li>
          <li>6. 电池：86Wh 锂离子电池</li>
          <li>7. 网络：家庭宽带1000M</li>
        </ol>
        <a-typography-title :heading="6"  style="text-indent: 20px;margin:20px 0 10px 0;">算力预估</a-typography-title>
        <ol>
          <li>- 单精度浮点性能（FP32）：约12 TFLOPS（万亿次浮点运算每秒）</li>
          <li>- Tensor核心性能：约91.2 Tensor TFLOPS，用于AI和深度学习计算</li>
          <li>- Ray Tracing（光线追踪）性能：约25.8 GRays/s（每秒兆光线与物体的相交计算）</li>
        </ol>
      </a-typography-paragraph>
    </a-typography>
  </a-card>
  <a-card :bordered="false">
    <div class="flexstretch">
      <div class="stretchbox">
        <a-typography-title :heading="5" style="margin:20px 0">韶关分布式集群节点</a-typography-title>
        <p class="spacebetween"><span>显卡要求:</span><span>GTX3060</span></p>
        <p class="spacebetween"><span>网络带宽要求:</span><span>≥500M</span></p>
        <p class="spacebetween"><span>网络延迟要求:</span><span>≤104ms</span></p>
        <p class="spacebetween"><span>可用存储要求:</span><span> ≥100GiB</span></p>
        <p class="spacebetween"><span>可用内存要求:</span><span> ≥10GiB</span></p>
        <p class="spacebetween"><span>节点计算类型:</span><span>AI模型训练</span></p>
        <p class="spacebetween"><span>节点评分:</span><span>3星</span></p>
        <p class="spacebetween"><span>节点预估收益/TFLOPS:</span><span>¥ 0.7 /小时</span></p>
        <p class="spacebetween blockp"><a-button type="primary">加入节点</a-button><a-button type="text">了解更多</a-button></p>
      </div>
      <div class="stretchbox" style="margin:0 20px">
        <a-typography-title :heading="5" style="margin:20px 0">南京分布式集群节点</a-typography-title>
        <p class="spacebetween"><span>显卡要求:</span><span>GTX3060</span></p>
        <p class="spacebetween"><span>网络带宽要求:</span><span>≥500M</span></p>
        <p class="spacebetween"><span>网络延迟要求:</span><span>≤104ms</span></p>
        <p class="spacebetween"><span>可用存储要求:</span><span> ≥100GiB</span></p>
        <p class="spacebetween"><span>可用内存要求:</span><span> ≥10GiB</span></p>
        <p class="spacebetween"><span>节点计算类型:</span><span>AI模型训练</span></p>
        <p class="spacebetween"><span>节点评分:</span><span>3星</span></p>
        <p class="spacebetween"><span>节点预估收益/TFLOPS:</span><span>¥ 0.7 /小时</span></p>
        <p class="spacebetween blockp"><a-button type="primary">加入节点</a-button><a-button type="text">了解更多</a-button></p>
      </div>
      <div class="stretchbox">
        <a-typography-title :heading="5" style="margin:20px 0">成都分布式集群节点</a-typography-title>
        <p class="spacebetween"><span>显卡要求:</span><span>GTX3060</span></p>
        <p class="spacebetween"><span>网络带宽要求:</span><span>≥500M</span></p>
        <p class="spacebetween"><span>网络延迟要求:</span><span>≤104ms</span></p>
        <p class="spacebetween"><span>可用存储要求:</span><span> ≥100GiB</span></p>
        <p class="spacebetween"><span>可用内存要求:</span><span> ≥10GiB</span></p>
        <p class="spacebetween"><span>节点计算类型:</span><span>AI模型训练</span></p>
        <p class="spacebetween"><span>节点评分:</span><span>3星</span></p>
        <p class="spacebetween"><span>节点预估收益/TFLOPS:</span><span>¥ 0.7 /小时</span></p>
        <p class="spacebetween blockp"><a-button type="primary">加入节点</a-button><a-button type="text">了解更多</a-button></p>
      </div>
    </div>
  </a-card>
</template>
<script setup>
import { ref } from 'vue';

</script>
<style lang='less' scoped>
.flexstretch{
  display: flex;
  align-items: stretch;
  .stretchbox {
    flex: 0.33;
    background-color:rgba(242,243,245,0.8);
    border-radius: 12px;
    padding:10px 22px;
    p{
      line-height: 40px;
      height: 40px;
    }
    .blockp{
      height: 40px;
      padding-top: 10px;
    }
  }
}
</style>