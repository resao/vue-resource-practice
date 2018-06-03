import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-http-9a8c3.firebaseio.com/';

new Vue({
  el: '#app',
  render: h => h(App)
})
