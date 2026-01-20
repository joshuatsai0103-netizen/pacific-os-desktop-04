{
  "name": "pacific-os",
  "version": "1.0.0",
  "main": "main.js",
  "private": true,
  "scripts": {
    "dist": "electron-builder --win"
  },
  "devDependencies": {
    "electron": "^28.0.0",
    "electron-builder": "^24.9.1"
  },
  "build": {
    "appId": "com.pacific.os",
    "productName": "PACIFIC OS",
    "win": {
      "target": "nsis",
      "icon": "build/icon.ico"
    },
    "nsis": {
      "license": "EULA.txt",
      "installerSidebar": "build/installerSidebar.bmp",
      "createDesktopShortcut": true,
      "shortcutName": "PACIFIC OS"
    }
  }
}
