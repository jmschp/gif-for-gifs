// Generated using webpack-cli http://github.com/webpack-cli
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      // template: "index.html",
      template: "!!html-loader!templates/index.html",
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      { test: /\\.(js|jsx)$/, loader: "babel-loader" },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/, type: "asset" },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};
