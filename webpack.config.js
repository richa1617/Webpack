const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },

      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      { test: /\.css$/, 
         use: ["style-loader", "css-loader"] },
    ],
  },

  plugins :[
    new HtmlWebpackPlugin ({
      title :"Webpack",
      filename :"index.html",
      template :"./src/template.html"
    })
  ]
};

//For path we need to provide absolute path.The __dirname is a special variable in Node.js that represents the directory name of the current module. It provides the absolute path of the current file.The path.resolve() function will return the absolute path by joining the __dirname and "dist"
