const webpack = require('webpack');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src/views'),
    build: path.resolve(__dirname, '../public')
}

const commonConfig = {
    entry: {
        bundle: `${PATHS.src}/assets/js/index.js`
    },
    module: {
        rules: [{
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: 'url-loader'
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}

module.exports = {
    PATHS,
    commonConfig
}