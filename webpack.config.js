const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins =[];

const DOMAIN = 'http://localhost:8080'

// let CONFIG_STYLE_URL = JSON.stringify(`${DOMAIN}/bot.css`);
let CONFIG_TOP_IMAGE_URL = JSON.stringify( `${DOMAIN}/assets/icon/bubble-botton.svg`);
let CONFIG_BOTTOM_IMAGE_URL = JSON.stringify( `${DOMAIN}/assets/icon/bubble-top.svg`);
// let CONFIG_START_SCREEN_URL = JSON.stringify( `${DOMAIN}/form-bot.html`);
// let CONFIG_IMG_WEBLINK = JSON.stringify( `${DOMAIN}/assets/img/bot-image-carousel.png`);
// let CONFIG_URL_CLOSE_BUTTON = `${DOMAIN}/assets/icon/close-buttonbot.png`;
// let CONFIG_URL_ORDER_ICON = `${DOMAIN}/assets/icon/order-bot.png`;


if (process.env.NODE_ENV== 'production'){

    // let CONFIG_STYLE_URL = JSON.stringify(`${DOMAIN}/bot.css`);
    // let CONFIG_TOP_IMAGE_URL = JSON.stringify( `https://ifcmonitor.gitlab.io/chabot-form/icon/bubble-bott-dior.svg`);
    // let CONFIG_BOTTOM_IMAGE_URL = JSON.stringify( "https://ifcmonitor.gitlab.io/chabot-form/icon/bubble-top.svg");
    let CONFIG_TOP_IMAGE_URL = JSON.stringify( `${DOMAIN}/assets/icon/bubble-botton.svg`);
    let CONFIG_BOTTOM_IMAGE_URL = JSON.stringify( `${DOMAIN}/assets/icon/bubble-top.svg`);
    // let CONFIG_START_SCREEN_URL = JSON.stringify( `${DOMAIN}/form-bot.html`);
    // let CONFIG_IMG_WEBLINK = JSON.stringify( `${DOMAIN}/assets/img/bot-image-carousel.png`);
    // let CONFIG_URL_CLOSE_BUTTON = `${DOMAIN}/assets/icon/close-buttonbot.png`;
    // let CONFIG_URL_ORDER_ICON = `${DOMAIN}/assets/icon/order-bot.png`;

    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    plugins.push(new babiliPlugin());

    plugins.push(new optimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { 
            discardComments: {
                removeAll: true 
            }
        },
        canPrint:true
    }))
} 



plugins.push(new HtmlWebpackPlugin({
    
    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
    },
    filename: 'index-bot.html',
    template: __dirname + '/index.html',

}));

// plugins.push(new HtmlWebpackPlugin({
    
//     hash: true,
//     minify: {
//         html5: true,
//         collapseWhitespace: true,
//         removeComments: true
//     },
//     filename: 'form-bot.html',
//     template: __dirname + '/form-bot.html',
//     order_icon: CONFIG_URL_ORDER_ICON,
//     close_button: CONFIG_URL_CLOSE_BUTTON,

// }));

plugins.push(new extractTextPlugin('bot.css'))





plugins.push(new webpack.DefinePlugin({
        // SERVICE_URL,
        // CONFIG_STYLE_URL,
        CONFIG_TOP_IMAGE_URL,
        CONFIG_BOTTOM_IMAGE_URL,
        // CONFIG_START_SCREEN_URL,
        // CONFIG_IMG_WEBLINK,
        }
    ))


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.(s?c|sa)ss$/,
                use: extractTextPlugin.extract({
                    fallback:'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            } 
            //descomentar se usar realmente um api node.js
            // {
            //     test:/\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader'
            //     }

            // },
        ]
    },
    plugins
}