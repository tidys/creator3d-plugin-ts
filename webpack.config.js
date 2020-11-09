const Path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: {
        panel: './src/panel-view.vue'
    },
    output: {
        path: Path.join(__dirname, './dist'),
        filename: "panel-view.js",
        library: 'hello'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/

            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    onlyCompileBundledFiles: true,
                    appendTsSuffixTo: [/\.vue$/], // 给.vue文件添加个.ts后缀用于编译
                }
            },
            {
                test: /\.js(x)$/,
                enforce: 'pre',
                loader: 'babel',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [new VueLoaderPlugin()]
}
