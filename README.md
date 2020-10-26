# [clean-electron-react](https://github.com/matthiaaas/clean-electron-react)

`clean-electron-react` is an Electron boilerplate including only [React](https://github.com/electron/electron), [Babel](https://github.com/babel/babel) and [Webpack](https://github.com/webpack/webpack) in order to provide the cleanest possible setup experience.

###### Notice: This boilerplate is still in development

## Getting Started

Clone the repository or [Use this template](https://github.com/matthiaaas/clean-electron-react/generate).

```
git clone https://github.com/matthiaaas/clean-electron-react.git YOUR-PROJECT-NAME
cd YOUR-PROJECT-NAME
yarn
```

## Development

Start the `webpack-dev-server` and listen for file changes (supports hot reloading). Then start Electron.

```
yarn watch
yarn dev
```

You can now start building your app:

### app/[app.js](https://github.com/matthiaaas/clean-electron-react/tree/master/app/app.js) (electron entry)

```js
const createWindow = () => {
  // initial window config
  const win = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.show()

app.whenReady().then(createWindow)
```

### app/components/[App.jsx](https://github.com/matthiaaas/clean-electron-react/tree/master/app/components/App.jsx)

```js
export default function App() {
  return null
}
```

## Packaging

Package your app using `electron-builder`. Output can be found in `/dist`

```
yarn build
```

## Why another boilerplate?

Other Electron React boilerplates come with a ton of additional dependencies and a predefined file structure.</br>
This template is preconfigured from scratch and only includes essential parts and scripts so you can start developing right away.

### Minimalistic file structure

```c
├── app
    ├── components
    │   └── App.jsx // rendered component
    ├── app.js // electron entry file
    ├── index.html
    ├── index.js // react renderer
    └── manifest.json
├── build // webpack build output
├── dist // electron-builder output
└── package.json
```
