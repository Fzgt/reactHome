const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    mode: 'production',
    output: {
        assetModuleFilename: "images/[name].[contenthash:5].bundle.[ext]",
        filename: "scripts/[name].[contenthash:5].bundle.js",
        publicPath: "/assets"
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), //webpack5推荐使用CssMinimizerPlugin压缩css
        ],
        minimize: true,
        runtimeChunk: {
            name: "runtime"
        },
        splitChunks: {
            chunks: "async", // initial all  函数
            minChunks: 1, //超过这个引用次数才做单独提取
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    name: "commons"
                }
            },
            minSize: {
                javascript: 100000, //字节
                style: 1000000
            },
            // maxSize: {}
        }
    },
    devServer: {
        historyApiFallback: true,  //history模式下的路由 重定向到首页就不会404
        port: 8082,
    },

    // devtool: "source-map", //打包后的代码与源代码的映射，线上要处理一下 不然控制台source里会暴露代码。
    plugins: [
        new CleanWebpackPlugin(), //清除上次打包的dist文件
        new HtmlWebpackPlugin({
            title: "京程一灯vip官网",
            filename: "index.html",
            template: resolve(__dirname, "../src/index-prod.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            }
        }),
        // new OptimizeCSSAssetsPlugin({
        //     assetNameRegExp: /\.css$/g,
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: {
        //         preset: [
        //             "default",
        //             {
        //                 discardComments: {
        //                     removeAll: true
        //                 }
        //             }
        //         ]
        //     }
        // })

    ]
}