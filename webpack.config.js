const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(_dirname, "src/index.js"),
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        // filename: "[name].[contenthash].js",
        // assetModuleFilename: "[name][ext]",
        clean: true,
    }
}