import electron from "electron"

export const isDev = () => !electron.app.isPackaged
