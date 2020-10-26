const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve("build"),
    filename: "bundle.js"
  },
  target: "electron-renderer",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        resolve: {
          extensions: [
            ".js", ".jsx"
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: [ "./app" ],
    inline: true,
    hot: true,
    stats: "errors-only",
    overlay: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "app/index.html"
    })
  ]
}
