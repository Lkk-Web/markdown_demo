const path = require("path"); //调用路径
const HtmlWebpackPlugin = require("html-webpack-plugin"); //引入打包html的插件
const json = require("./package.json"); // 这个路径视当前的路径进行对于修改
const webpack = require("webpack");

module.exports = {
  mode: "development", //开发模式
  //   entry: "./src/index.js", //入口文件
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    // 将 第三方依赖 单独打包
    vendor: Object.keys(json.dependencies),
  },
  output: {
    path: __dirname + "/dist", //指定生成的文件目录
    filename: "[name].js", //输出文件名
    publicPath: "/",
  },
  // 插件
  plugins: [
    // html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"), //文件模板
      filename: "index.html", //输出文件名
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   filename: "[name].[chunkhash:8].js",
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
