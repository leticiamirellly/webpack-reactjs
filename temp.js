const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = (env, argv) => {
//   const isDevelopment = argv.mode === "development";
//   const commomConfig = {
//     mode: isDevelopment ? "development" : "production",
//     entry: "./src/main.js",
//     output: {
//        path: path.resolve(__dirname, "./dist"),
//       clean: true,
//     },
//   };
//   const commonModules = [
//     {
//       test: /\.html$/,
//       use: [{ loader: "html-loader" }],
//     },
//   ];
//   const commonPlugins = [
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       template: "./src/template.html",
//     }),
//     new CleanWebpackPlugin(),
//   ];
//   const customConfig = isDevelopment
//     ?  {
//           devServer: {
//           port: 4000,
//           static: {
//           directory: path.resolve(__dirname, "./dist"),
//           },
//           devMiddleware: {
//             index: "index.html",
//             writeToDisk: true,
//           },
//           client: {
//             overlay: true,
//           },
//           liveReload: false,
//         },
//         module: {
//           rules: [
//             {
//               test: /\.css$/,
//               use: ["style-loader", "css-loader"],
//             },
//             ...commonModules,
//           ],
//         },
//         plugins: [...commonPlugins],
//       }
//     : {
//         output: {
//           filename: "js/[name].[contenthash:15].js",
//           clean: true,
//         },
//         module: {
//           rules: [
//             {
//               test: /\.css$/i,
//               use: [MiniCssExtractPlugin.loader, "css-loader"],
//             },
//             ...commonModules,
//           ],
//         },
//         plugins: [
//           new MiniCssExtractPlugin({
//             filename: "styles/[name].[contenthash:15].css",
//           }),
//           ...commonPlugins,
//         ],
//       };
//   return {
//     ...commomConfig,
//     ...customConfig,
//   };
// };