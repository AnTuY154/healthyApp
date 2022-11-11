const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    inline: false,
    port: 3010,
    watchContentBase: true,
    compress: true,
    historyApiFallback: true,
    overlay: true,
  },
  devtool: "inline-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(__dirname, "src/_variables.scss"),
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png)$/i,
        use: [
        {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      ]
    }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx",".ts",".tsx"],
    alias: {
      Component: path.resolve(__dirname, "src/components/"),
      Assets: path.resolve(__dirname, "src/assets/"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
