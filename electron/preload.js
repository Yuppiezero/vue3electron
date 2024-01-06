/**
 * 创建窗口时设置 contextIsolation: false
 * 导致官方推荐的隔离API失效
 * 进程间通信将通过 @vueuse/electron 库的 Hook 调用
 */
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  exit: () => ipcRenderer.send('close')
})
