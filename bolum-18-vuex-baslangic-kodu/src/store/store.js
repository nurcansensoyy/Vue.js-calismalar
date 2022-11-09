import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter : 0
    },
    getters: {
        getDoubleCounter(state) {
            return state.counter * 2; 
        },
        stringCounter(state) {
            return state.counter + ".kez tıklandı."
        }
    },
    mutations: { //state in içerisinde bulunan verilerin değerini güncellemek için kullanılan fonksiyonlardan biridir.
        increaseCounter(state) {
            state.counter++;  //state in içindeki counter değerine value ile dışardan gelen value değerini ekle.
        },
        decreaseCounter(state) {
            state.counter--;
        }
    }
});