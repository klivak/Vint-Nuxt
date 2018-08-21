import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

Vue.use(VueScrollTo, {
	container: "body",
	duration: 1000,
	easing: "ease-in",
	offset: 0,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true
});