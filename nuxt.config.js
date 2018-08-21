module.exports = {
	head: {
		title: '{{ name }}',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: '{{ description }}'},
			{hid: 'keywords', name: 'keywords', content: '{{ keywords }}'},
			{name: 'theme-color', content: '#262626'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: 'img/favicon-32x32.png'}
		]
	},
	css: [
		'normalize.css/normalize.css',
		{src: '~assets/css/sass/main.sass', lang: 'sass'},
	],
	transition: 'page',
	loading: {
		color: '#3db565',
		height: '3px'
	},
	plugins: [
		{ src: '~/plugins/vue-map', ssr: true },
		{ src: '~/plugins/vue-scrollto', ssr: false },
		{ src: '~/plugins/vue-validate', ssr: true }
	],
	modules: [
		'@nuxtjs/sitemap'
	],
	build: {
		vendors: ['babel-polyfill'], // for google maps ie11
		extend (config, {isDev, isClient}) {
			if (!isClient) {
				config.externals.splice(0, 0, function (context, request, callback) {
					if (/^vue2-google-maps($|\/)/.test(request)) {
						callback(null, false)
					} else {
						callback()
					}
				})
			}
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
};

