import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'; //router ı import ettik
import {routes} from "./routes"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, // bunu sadece routes şeklinde de bırakabilirz zaten o routes.js ile aynı isimde olduğu için kendisi anlayabilir
  mode: 'history',//hash : default araya # koymayarak yönlendirme işlemi sağlar
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) { //eğer gittiğimiz sayfada hash varsa
      return {
        selector: to.hash
      }
    }
    return { x: 0, y: 800 }
  }
});
//girişte kontrol sağlamak için
router.beforeEach((to, from, next) => {
  console.log("global olarak kontrol")
  next();
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
