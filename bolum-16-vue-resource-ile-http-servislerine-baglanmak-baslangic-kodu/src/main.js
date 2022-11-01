import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
//Vue resource ile HTTP servislerine bağlanırız

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-vue-resource-d030f-default-rtdb.firebaseio.com"; //http url sini artık her seferinde girmemize gerek yok

Vue.http.interceptors.push((request, next) => { //interceptors bir array dir bu request ve next parametreleri içeren bir function alır... request argümanı bize yaptığımız işlemi veren argümandır, next argümanı requst in devamını getiren fonksiyondur.
  // if (request.method == "POST") {
  //   request.method = "PUT"
  // }
  next((response => {
    response.json = () => {
      return {
       userList : response.body
     }
   }
 }));

});
new Vue({
  el: '#app',
  render: h => h(App)
})
