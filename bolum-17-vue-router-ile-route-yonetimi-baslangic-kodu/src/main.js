import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'; //router ı import ettik
import {routes} from "./routes"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, // bunu sadece routes şeklinde de bırakabilirz zaten o routes.js ile aynı isimde olduğu için kendisi anlayabilir
  mode : 'history' //hash : default araya # koymayarak yönlendirme işlemi sağlar
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
