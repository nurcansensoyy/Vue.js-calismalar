import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value : 0,
    },
    getters: {
        getDoubleCounter(state) {
            return state.counter * 2; 
        },
        stringCounter(state) {
            return state.counter + ".kez tıklandı."
        },
        getValue(state) {
            return state.value;
        }
    },
    mutations: { //state in içerisinde bulunan verilerin değerini güncellemek için kullanılan fonksiyonlardan biridir.
        increaseCounter(state, payload) {
            state.counter += payload;  //state in içindeki counter değerine value ile dışardan gelen value değerini ekle.
        },
        decreaseCounter(state) {
            state.counter--;
        },
        setValue(state, payload) {
            state.value = payload;
        }
    },
    actions: { //asenkron bir şekilde çalışan istek göndermek gibi olaylarda mutations ile child arasına girer.
        increment({commit}) {//commit vasıtasıyla mutations içindeki fonksiyonlara erişebiliriz.
            commit("increaseCounter");
        },
        decrement({commit}) {
            commit("decreaseCounter");
        },
        incAsync({ commit }, payload) { //payload parametresidir
            setTimeout(() => {
                commit("increaseCounter", 1 ) //1 arttır
            }, payload.time)
        },
       
    }
});