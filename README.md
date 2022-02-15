# [clean-electron-react](https://github.com/matthiaaas/clean-electron-react)

`clean-electron-react` is an Electron boilerplate including a fresh setup of [React](https://github.com/facebook/react), [Typescript](https://github.com/microsoft/typescript) [Prettier](https://github.com/prettier/prettier) and [Webpack](https://github.com/webpack/webpack) in order to provide the cleanest possible setup experience.

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
yarn build
yarn watch
yarn dev
```

You can now start building your app:

### app/[app.ts](https://github.com/matthiaaas/clean-electron-react/tree/main/app/app.ts) (electron entry)

```ts
const createWindow = () => {
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

  win.show()
}

app.whenReady().then(createWindow)
```

### app/components/[App.tsx](https://github.com/matthiaaas/clean-electron-react/tree/main/app/components/App.tsx)

```tsx
export default function App() {
  return null
}
```

## Packaging

Package your app using `electron-builder`. Output can be found in `/dist`

```
yarn package
```

## Why another boilerplate?

Other Electron React boilerplates come with a ton of additional dependencies and a predefined file structure.</br>
This template is preconfigured from scratch and only includes essential parts and scripts so you can start developing right away.

### Minimalistic file structure

```c
├── app
    ├── components
    │   └── App.tsx // rendered component
    ├── app.ts // electron entry file
    ├── index.html
    ├── root.tsx // react renderer
    └── manifest.json
├── build // webpack build output
├── dist // electron-builder output
├── package.json
├── tsconfig.json
└── webpack.config.js
```
