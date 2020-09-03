const isPro = process.env.NODE_ENV === 'production';

module.exports = {
	// 基本路径
	publicPath: './',
	productionSourceMap: !isPro,
	// lintOnSave: false,
	filenameHashing: false, // 取消文件hash
	chainWebpack: (config) => {
		// 添加svg-sprite-loader
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule.use('raw-loader').loader('raw-loader');
	},
	configureWebpack: (config) => {
		// 开启分离js
		// https://webpack.docschina.org/configuration/optimization/
		config.optimization = {
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 20000,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							// get the name. E.g. node_modules/packageName/not/this/part.js
							// or node_modules/packageName
							const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
							// npm package names are URL-safe, but some servers don't like @ symbols
							return `npm.${packageName.replace('@', '')}`;
						}
					}
				}
			}
		};
	},
	devServer: {
		disableHostCheck: true
	}
};
