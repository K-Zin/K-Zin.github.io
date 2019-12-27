const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/ts/Index.tsx",
  output: {
    path: path.join(__dirname + "/dist/"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: true,
    watchContentBase: true,
    hot: true,
    open: true,
    port: 9000,
  }
}
