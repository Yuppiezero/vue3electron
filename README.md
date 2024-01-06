# Vue 3 + Vite + Electron

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Vu3 hook

- ref 比 reactive 好用，reactive有变量定义 数组视图不更新问题。
  ref 二次赋值 要在变量后 .value =

- onMounted 页面初始化需要挂载时候使用

```javascript
onMounted( ()=>{

  getList()
  
})
```
- onBeforeMount  ===》  onMounted ===》  onBeforeUnmount ===》  onUnmounted 
- ononBeforeMount()
  组件被挂载之前被调用。它在组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点之前触发
- onMounted()
  组件挂载完成后执行。此时DOM节点已创建完成。通常用于执行需要访问组件所渲染的 DOM 树相关的副作用，或是在服务端渲染应用中用于确保 DOM 相关代码。
- onBeforeUnmount()
  组件被卸载之前被调用
- onUnmounted()
  组件卸载之后调用。通常用于做一下清理工作
- onBeforeUpdate 与 onUpdated
- onBeforeUpdate()
当组件因响应式状态变化，且该响应式状态会影响视图。此时先触发此事件，然后再更新视图
- onUpdated
当组件因响应式状态变化，且该响应式状态更新了视图之后，触发此事件
## about ipcRenderer

```javascript
import { useIpcRenderer } from "@vueuse/electron";

const ipcRenderer = useIpcRenderer();

ipcRenderer.send("window-new", "im render"); // 向主进程通信
```

### electron-main/index.js中主进程监听事件：

```javascript
import { app, BrowserWindow, ipcMain } from "electron";
  // 监听渲染进程方法
  ipcMain.on("window-new", (e: Event, data: string) => {

  console.log(data); // 打印出发过来的 im render

  });
```

### 示波器
```
USB0::0xF4EC::0x1102::SDG2XCAD3R2618::INSTR
```

### 信号发生器
```
USB0::0x2A8D::0x1762::MY59241493::INSTR
```

# 操作步聚

