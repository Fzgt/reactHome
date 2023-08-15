const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        publicPath: '/',
        assetModuleFilename: "images/[name][ext]",
        filename: "scripts/[name].bundle.js"
    },
    devServer: {
        historyApiFallback: true,  //history模式下的路由 重定向到首页就不会404
        // contentBase: path.join(__dirname, '../dist'),
        port: 8082,
        // host: "0.0.0.0",
        // quire: true //静默模式 报错提示屏蔽 配合friendly-error-webpack-plugin 这两个配合用一个就行
        // inline: true, //iframe模式
        // watchContentBase: true,
    },
    // devServer: {
    //     static: path.resolve(__dirname, '../dist/assets'),
    //     contentBase: join(__dirname, '../dist'),
    //     port: 8080,
    //     open: true,
    //     hot: true
    // },
    devtool: "source-map", //打包后的代码与源代码的映射，线上要处理一下 不然控制台source里会暴露代码。
    plugins: [
        new HtmlWebpackPlugin({
            favicon: resolve(__dirname, '../src/assets/images/logo.png'),
            title: "网易云音乐",
            filename: "index.html",
            template: resolve(__dirname, "../src/index-dev.html")
        })
    ]
}