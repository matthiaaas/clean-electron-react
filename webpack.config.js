const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = [
  {
    mode: "development",
    entry: "./app/app.ts",
    target: "electron-main",
    output: {
      filename: "app.js",
      path: path.resolve("build")
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
          resolve: {
            extensions: [".ts"]
          }
        }
      ]
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "app/")
      }
    },
    stats: "minimal"
  },
  {
    mode: "none",
    entry: "./app/root.tsx",
    target: "electron-renderer",
    output: {
      filename: "bundle.js",
      path: path.resolve("build"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          resolve: {
            extensions: [".ts", ".tsx"]
          },
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|woff|woff2)$/i,
          use: "url-loader"
        }
      ]
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "app/")
      }
    },
    stats: "minimal",
    optimization: {
      usedExports: true,
      minimizer: [new TerserPlugin()]
    },
    devServer: {
      port: 8080,
      static: "app",
      hot: true,
      client: {}
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "app/index.html",
        publicPath: ""
      })
    ]
  }
]
