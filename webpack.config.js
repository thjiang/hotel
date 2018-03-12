const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // webpack 性能分析
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env.NODE_ENV.trim();
let cdnpath = "http://localhost:9091/build";
let bundlecdnpath = "http://localhost:9091/build/static";
let publicPath = '/build/';
let filename = 'pages/index.html';
let mode = 'development';

if (env === "prod") {
    cdnpath = "https://c.icewish.top";
    publicPath = cdnpath + '/';
    bundlecdnpath = cdnpath;
    filename = path.join(__dirname, 'build/pages/index.html');
    mode = 'production';
}

module.exports = {
    entry: {
		index: path.join(__dirname, 'src', 'main')
        // vendors: ['vue']
	},
	output: {
		path: path.join(__dirname, 'build/static'),
		filename: 'main.js',
        publicPath: publicPath
    },
    mode: mode,
	module: {
        rules: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]'
            }
        }, {
			test: /\.js$/,
            loader: 'babel-loader?cacheDirectory=true',
            exclude: /node_modules/
		}]
    },
	plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/static/dll/bundle-manifest.json')
        }),
        new HtmlWebpackPlugin({
            inject: false,
            title: '酒店查询',
            filename: filename,
            template: 'index.ejs',
            cdnpath: cdnpath,
            bundlecdnpath: bundlecdnpath
        })
    ],
	resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
	},
	devServer: {
		hot: false,
        inline: true,
        quiet: false,
        disableHostCheck: true, // 解决 Invalid Host Header，禁用 host header 正确性检测
        stats: {
            chunks: false
        },
        port: 9091
	}
};
