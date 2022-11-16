import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';
import {router} from "./router"



Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: "",
        fbAPIKey: "AIzaSyBej7mlLxlzRUqwS8u4HT_PgKM-ndDpXDY"
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        initAuth({ commit, dispatch }) {
            let token = localStorage.getItem("token")
            if (token) {
                let expirationDate = localStorage.getItem("expirationDate")
                let time = new Date().getTime()

                if (time >= +expirationDate) {
                    console.log("token süresi geçmiş")
                    dispatch("logout")
                } else {
                    commit("setToken", token) 
                    let timerSecond = +expirationDate - time
                    console.log(timerSecond)
                    dispatch("setTimeoutTimer",timerSecond)
                    router.push("/")
                    
                }

                
            } else {
                router.push("/auth");
                return false
            }
        },
        login({ commit, state, dispatch }, authData) {
            let authLink = "https://identitytoolkit.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key="

                if (authData.isUser) {
                    authLink ="https://identitytoolkit.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="
                }
                
                axios.post(
                    authLink + "AIzaSyBej7mlLxlzRUqwS8u4HT_PgKM-ndDpXDY",
                    { email: authData.email, password: authData.password, returnSecureToken: true }
                ).then(response => {
                    //console.log(response.data) 
                    commit("setToken", response.data.idToken)
                    localStorage.setItem("token", response.data.idToken)
                    localStorage.setItem("expirationDate",new Date().getTime() + +response.data.expireIn * 1000)

                    localStorage.setItem("expirationDate",new Date().getTime() + 10000)
                   dispatch("setTimeoutTimer", +response.data.expireIn * 1000)
                    dispatch("setTimeoutTimer", 10000)
                })
         
        },
        logout({ commit}) {
            commit("clearToken")
            localStorage.removeItem("token")
            localStorage.removeItem("expirationDate")
            router.replace("/auth")
        },
        setTimeoutTimer({ dispatch }, expireIn) {
            setTimeout(() => {
                dispatch("logout")
            },expireIn)
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        }
    }
})

export default store