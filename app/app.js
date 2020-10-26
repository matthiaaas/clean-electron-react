const path = require("path")
const isDev = require("electron-is-dev")
const { app, BrowserWindow } = require("electron")

const isMac = process.platform === "darwin"

const createWindow = () => {
  // initial window config
  const win = new BrowserWindow({
    width: 820,
    height: 532,
    frame: false,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(isDev ? "http://localhost:8080" : `file://${path.join(__dirname, "../build/index.html")}`)
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (isMac) {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
