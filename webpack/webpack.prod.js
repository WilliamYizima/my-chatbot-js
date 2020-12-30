const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const {
    PATHS
} = require('./webpack.common');

const prodConfig = {
    mode: "production",
    output: {
        filename: 'js/[name].[contenthash].js',
        path: `${PATHS.build}`,
        publicPath: `/public/`
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new UglifyJsPlugin()
        ]
    },
    module: {
        rules: [{
            test: /\.(s?c|sa)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/views/index.html'),
            filename: `index.html`,
            publicPath: '/'
		}),
        new MiniCssExtractPlugin({
            filename: `css/[name].[contenthash].css`,
            chunkFilename: "[id].css",
        })
    ]
}

module.exports = prodConfig;