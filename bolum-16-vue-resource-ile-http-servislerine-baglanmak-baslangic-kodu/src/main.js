import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
//Vue resource ile HTTP servislerine bağlanırız
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
