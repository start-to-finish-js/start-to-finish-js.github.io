const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./index.js",
  },
  output: {
    filename: "[name].min.js",
    path: __dirname,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};