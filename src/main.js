import Vue from 'vue'
import App from './App.vue'
//import './scss/custom-bootstrap.scss'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
//import VueSplide from '@splidejs/vue-splide';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'

//Vue.use( VueSplide) 


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.component('ssr-carousel',SsrCarousel)
Vue.component(ssrCarouselCss)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Icons
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
