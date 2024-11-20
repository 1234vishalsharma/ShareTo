import { app, BrowserWindow } from 'electron';

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1500,
      height: 1200,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    })
  
    win.loadURL("https://share-to-keal.vercel.app/")
}

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  app.whenReady().then(() => {
    createWindow()
  })