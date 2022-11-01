import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
//Vue resource ile HTTP servislerine bağlanırız

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-vue-resource-d030f-default-rtdb.firebaseio.com/users.json"; //http url sini artık her seferinde girmemize gerek yok
new Vue({
  el: '#app',
  render: h => h(App)
})
