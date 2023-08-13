const merge = require('webpack-merge');
const { join, resolve } = require('path');
// 获取命令执行中的参数
// console.log(process.argv.slice(2))
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 该插件将 CSS 提取到单独的文件中。它为每个包含 CSS 的 JS 文件创建一个 CSS 文件。它支持 CSS 和 SourceMap 的按需加载。

//css解析
let csssLoaders = [
    MiniCssExtractPlugin.loader,
    {
        loader: "css-loader",
        options: {
            importLoaders: 1
            // importLoaders选项允许你配置在 css-loader之前有多少loader应用于@import ed资源
            // 默认0
        }
    },
    {
        loader: "postcss-loader"
    }
]

// 公共配置
const webpackBaseConfig = {
    entry: {
        app: resolve('src/index.tsx'),
    },
    output: {
        path: join(__dirname, './dist/assets')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)/,
                include: [resolve('src')],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: csssLoaders
            },
            {
                test: /\.(png|jpeg|gif|eot|woff|woff2|ttf|svg|otf|webp)/,
                type: "asset"
            }
        ],
    },
    // external: {
    //     // react: "react" //线上的话 用cdn引入 排除这个包的打包
    // },
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        alias: {
            "@assets": resolve("src/assets"),
            "@components": resolve("src/components"),
            "@models": resolve("src/models"),
            "@routes": resolve("src/routes"),
            "@pages": resolve("src/pages"),
            "@utils": resolve("src/utils"),
            "@recoil": resolve("src/recoil"),
            "@hooks": resolve("src/hooks"),
            "@api": resolve("src/api"),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: _modeFlag ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
            chunkFilename: _modeFlag ? "styles/[name].[contenthash:5].css" : "styles/[id].css",
            ignoreOrder: true,
        })
    ]
}

module.exports = merge.default(webpackBaseConfig, _mergeConfig)