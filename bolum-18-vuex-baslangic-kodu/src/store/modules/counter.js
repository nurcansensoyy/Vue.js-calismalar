const state = {
    counter: 0,
}

const getters = {
    getDoubleCounter(state) {
            return state.counter * 2; 
        },
        stringCounter(state) {
            return state.counter + ".kez tıklandı."
        },
}

const mutations = {
    increaseCounter(state, payload) {
            state.counter += payload;  //state in içindeki counter değerine value ile dışardan gelen value değerini ekle.
    },
    
    decreaseCounter(state) {
            state.counter--;
    },
        
}

const actions = {
    increment({commit},payload) {//commit vasıtasıyla mutations içindeki fonksiyonlara erişebiliriz.
            commit("increaseCounter",payload);
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

export default {
    state,
    getters,
    mutations,
    actions
}