// production config
const merge = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./client/index.tsx",
  output: {
    /*
       It is much better to output all js, html, and wasm.wasm files on the same level under /dist.
       It makes things complicated if you put the js files to /dist/js... because the sql-wasm.wasm file will have to be also in the JS folder.
     */
    filename: "bundle.[hash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [],
});
