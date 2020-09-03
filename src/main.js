import Vue from 'vue';
import App from './App.vue';
// import * as fundebug from 'fundebug-javascript';
// import fundebugVue from 'fundebug-vue';
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import { Integrations } from '@sentry/tracing';

// fundebug.init({
// 	apikey: '4daf9996bff63920325c95e46191a6d79f6d721014f5f467646a2e945f85ba78'
// });

// fundebugVue(fundebug, Vue);

Sentry.init({
	dsn: 'https://2119b95a89f64cdca131484c118f9f26@o442954.ingest.sentry.io/5415756',
	integrations: [
		new VueIntegration({
			Vue,
			tracing: true,
			logErrors: true
		}),
		new Integrations.BrowserTracing()
	],
	tracesSampleRate: 1
});

Vue.config.productionTip = false;

// 异常捕获
// window.onerror 最大的好处就是同步任务和异步任务都可以捕获 但无法捕获网络异常错误
// 如果返回true在控制台就不会看到错误了
// 但是在vue中这样是监听不到错误的 需要使用vue提供的handleError句柄
// Vue.config.errorHandler = (err, vm, info) => {
// err 错误对象，包括message和stack属性
// vm 是错误所在的vue实例
// info Vue特定的错误信息，比如错误所在的生命周期钩子
// console.log({ err, vm, info });
// return true;
// };

new Vue({
	render: (h) => h(App)
}).$mount('#app');
