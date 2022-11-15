import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
    state: {
        token :"",
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
            
        },
        logout({ commit, state, dispatch }) {
            
        }
    },
    getters: {
        
    }
})

export default store