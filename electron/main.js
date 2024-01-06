const { app, BrowserWindow } = require('electron')
const ipc = require('electron').ipcMain
const path = require('path')

async function createWindow () {
  // noinspection JSCheckFunctionSignatures
  __dirname
  const mainWindow = new BrowserWindow({
    icon: __dirname + '/public/favicon.ico',
    width: 1,
    height: 1,
    opacity:0,
    titleBarStyle: 'hidden',
    resizable: false,
    transparent:true,
    webPreferences: {
			// preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
			enableRemoteModule: true,
			webSecurity: true
    },
    backgroundColor: '#00000000',
  })
  // console.log(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`)
  // mainWindow.loadURL('http://127.0.0.1:5173')
  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  } else {
    let url = "http://127.0.0.1:5173"; // 本地启动的vue项目路径
    await mainWindow.loadURL(url);
  }
  // 开发环境下打开
  // mainWindow.webContents.openDevTools()
  mainWindow.webContents.closeDevTools()
  const setResiWind = (key) => {
    // parseInt(size.width * 0.9)parseInt(size.height * 0.9)
    if (key === 'max') {
      mainWindow.setMinimumSize(1200, 800)
      mainWindow.setResizable(true)
      mainWindow.setSize(1200, 800)
    }
    if (key === 'min') {
        mainWindow.setContentSize(1197, 702)
        mainWindow.setResizable(false)
    }
    mainWindow.setMaximizable(false)
    mainWindow.center()
  }
  ipc.on('setsize', (event, arg) => {
    setResiWind(arg)
  })
  ipc.on('min', () => {
    mainWindow.minimize()
  })
  ipc.on('restore', (event) => {
    mainWindow.restore()
    mainWindow.setContentSize(1200, 800)
    event.reply('watchSize','max')
    event.returnValue = mainWindow.isMaximized()
    mainWindow.center()
  })
  ipc.on('max', (event) => {
    // console.log(mainWindow.isMaximized())
    mainWindow.maximize()
    event.reply('watchSize','restore')
    event.returnValue = mainWindow.isMaximized()
  })
  ipc.once('login', () => {
    mainWindow.setOpacity(0)
    mainWindow.hide()
    mainWindow.setMinimumSize(1200, 800)

  })
  ipc.on('show',()=>{
    mainWindow.show()
    mainWindow.setOpacity(1)
  })
  ipc.on('close', function () {
    app.exit()
  })
  ipc.on('release', function (value) {
    // 页面再登录窗体时 不能拉伸
    // noinspection JSCheckFunctionSignatures
    mainWindow.setResizable(value)
  })
}
app.whenReady().then(async () => {
  await createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
