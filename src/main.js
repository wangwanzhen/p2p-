// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/font.js'
import './assets/js/global.js'
import './assets/css/index.css'
import store from './store/'
import axios from 'axios'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Loading from './components/Loading'
import filters from './filters'
// require styles
import './assets/css/swiper.min.css'
// import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Loading)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.prototype.$http = axios

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.dispatch('showLoading')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    store.dispatch('hideLoading')
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
