import Vue from 'vue'
import App from './App.vue'
import { router } from "./router" // router da const olarak import ettiğimiz için { } içinde yazıyoruz.
import store from './store' // store da default olarak import ettiğimiz için { } içinde yazmadık.

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
