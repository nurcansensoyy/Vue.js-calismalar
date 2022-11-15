import Vue from "vue";
import VueRouter from "vue-router";

import About from "./pages/About.vue"
import Homepage from "./pages/Homepage.vue"
import Auth from "./pages/auth/Auth.vue"
import store from "./store";

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Homepage,
            beforeEnter(to,from,next) {
                if (store.getters.isAuthenticated) { //isAuthenticated true dönüyorsa
                   next()
                } else { //isAuthenticated false dönüyorsa
                    next("/auth");
                }
            }

        },
        {
            path: "/about",
            component: About,
            beforeEnter(to,from,next) {
                 if (store.getters.isAuthenticated) { //isAuthenticated true dönüyorsa
                   next()
                } else { //isAuthenticated false dönüyorsa
                    next("/auth");
                }
            }

        },
        {
            path: "/auth",
            component: Auth
        }
        
    ],
    mode : "history"
})