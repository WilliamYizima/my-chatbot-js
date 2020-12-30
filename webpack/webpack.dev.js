const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const {
	PATHS
} = require('./webpack.common');

const devConfig = {
	mode: "development",
	output: {
		filename: 'js/[name].js',
		path: `${PATHS.build}`
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		host: '0.0.0.0',
		port: '9090'
	},
	module: {
		rules: [{
			test: /\.html$/,
			use: ['html-loader']
		},
		{
			test: /\.(s?c|sa)ss$/,
			use: [{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader',
				options: {
					modules: false,
					sourceMap: true
				}
			},
			{
				loader: 'sass-loader'
			}
			]
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/views/index.html'),
			css: []
		})
	]
}

module.exports = devConfig;