const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./docs"),
    publicPath: ".",
    devServer: {
        port: 7890,
    },
}
