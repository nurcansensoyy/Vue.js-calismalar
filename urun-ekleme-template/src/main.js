import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue(); //eventBus ı NewProduct ta import ederiz
new Vue({
  el: '#app',
  render: h => h(App)
})
