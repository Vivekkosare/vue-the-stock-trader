import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-420d6.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
