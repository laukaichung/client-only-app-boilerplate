// shared config (dev and prod)
const { resolve } = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * The context path is very important,
   * if you make it wrong it will screw up the compilation.
   */
  context: resolve(__dirname, "../../src"),
  output: {
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    mainFields: ["browser", "main", "module"],
  },
  node: {
    glob: "empty",
    path: "empty",
    fs: "empty",
    assert: "empty",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          "awesome-typescript-loader?configFileName=tsconfig.base.json",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    // the template path is considered by the context
    new HtmlWebpackPlugin({ template: "./client/index.html.ejs" }),
    new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
      result.request = result.request.replace(/typeorm/, "typeorm/browser");
    }),
    new webpack.ProvidePlugin({
      "window.SQL": "sql.js/dist/sql-wasm.js",
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  performance: {
    hints: false,
  },
};
