const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 不再打包CSS，直接使用link标签引入

let mode = "production";
const env = process.env.NODE_ENV.trim();
env === "dev" ? mode = "development" : null;

module.exports = {
    entry: {
        bundle: [
            // 'element-ui',
            // 'element-ui/lib/theme-chalk/index.css',
            'iview',
            'vue',
            'vue-router'
        ]
    },
    output: {
        path: path.join(__dirname, 'build/static/dll'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    mode: mode,
    // module: {
    //     loaders: [{
    //         test: /\.css$/,
    //         loader: 'style-loader!css-loader'
    //     }, {
    //         test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
    //         loader: 'file-loader',
    //         query: {
    //             name: '[name].[ext]'
    //         }
    //     }]
	// },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'build/static/dll', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        })
        // new ExtractTextPlugin('[name].css')
    ]
};
