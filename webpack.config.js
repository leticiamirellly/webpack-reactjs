const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const stylesHandler = MiniCssExtractPlugin.loader;
const Dotenv = require('dotenv-webpack');


module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  const commomConfig = {
    mode: isDevelopment ? "development" : "production",
    entry: "./index.tsx",
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
  const commonModules = [
    {
      test: /\.html$/,
      use: [{ loader: "html-loader" }],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(png|jp(e*)g|gif)$/,
      type: "asset/resource",
    },
    {
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
    }
  ];
  const commonPlugins = [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/template.html",
    }),
    new Dotenv(),
  ];
  const customConfig = isDevelopment ? {
    output: {
      path: path.resolve(__dirname, "./dist"),
      clean: true,
    },
    devServer: {
      port: 8000,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, "./dist"),
      },
      open: true,
      devMiddleware: {
        index: "index.html",
        writeToDisk: true,
      },
      client: {
        overlay: true,
      },
      liveReload: false,
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/i,
          use: ['style-loader', "css-loader", "postcss-loader", "sass-loader"],
        },
        ...commonModules,
      ],
    },
    plugins: [...commonPlugins]
  } : {
    output: {
      filename: "js/[name].[contenthash:15].js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ stylesHandler, {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[md4:hash:8]'
              }
            }
          }],
        },
        {
          test: /\.scss$/,
          use: [stylesHandler, "css-loader", 'sass-loader', "postcss-loader"],
        },
        ...commonModules,
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: '[id].css'
      }),
      ...commonPlugins,
    ]
  }

  return {
    ...commomConfig,
    ...customConfig,
  };
};
