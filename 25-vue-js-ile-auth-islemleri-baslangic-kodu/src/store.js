import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';


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
        login({ commit, state, dispatch }, authData) {
            let authLink = "https://identitytoolkit.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key="

                if (authData.isUser) {
                    authLink ="https://identitytoolkit.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="
                }
                
                axios.post(
                    authLink + "AIzaSyBej7mlLxlzRUqwS8u4HT_PgKM-ndDpXDY",
                    { email: authData.email, password: authData.password, returnSecureToken: true }
                ).then(response => {
                    commit("setToken", response.data.idToken)
                    localStorage.setItem("token",response.data.idToken)
                })
         
        },
        logout({ commit, state, dispatch }) {
            commit("clearToken")
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        }
    }
})

export default store