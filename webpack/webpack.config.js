const merge = require('webpack-merge').merge;
const { commonConfig } = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');


module.exports = env => {
	console.log(env);
	return (env.development) ? merge(commonConfig, devConfig) : merge(commonConfig, prodConfig);
};