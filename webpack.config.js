const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

//For path we need to provide absolute path.The __dirname is a special variable in Node.js that represents the directory name of the current module. It provides the absolute path of the current file.The path.resolve() function will return the absolute path by joining the __dirname and "dist"
