module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/images/' : '/',
	outputDir: process.env.outputDir,
	css: {
		//针对css相关的loader传递选项
		loaderOptions: {
			css: {
				//这里针对css-loader 具体参见webpack->css-loader选项
			// 	localIdentName: '[name]-[hash]',
			},
			postcss: {
				//针对postcss-loader
			}
		}
	},
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			//生产环境
		} else {
			//dev环境
		}
	},
	chainWebpack: (config) => {
		config.module
			//修改loader
			.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap((options) => {
				//修改选项
				return options;
			});
		//添加loader
		config.module.rule('graphql').test(/\.graphql$/).use('graphql-tag/loader').end();
		//替换一个规则里的loader
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule.use('vue-svg-loader').loader('vue-svg-loader');
	}
};
