import path from "path"
import { app, BrowserWindow } from "electron"

import { isDev } from "./utils/electron"

const isMac = process.platform === "darwin"

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 820,
    height: 532,
    frame: false,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  await win.loadURL(
    isDev()
      ? "http://localhost:8080"
      : `file://${path.join(__dirname, "../build/index.html")}`
  )
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
