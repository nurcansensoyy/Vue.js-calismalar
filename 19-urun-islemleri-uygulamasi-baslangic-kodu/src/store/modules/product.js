const state = {
    products : [] //bir array tutuyoruz ki ürünler bir yerde tutulsun
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) { //ürün çıkışında bir ürün seçildiğinde bilgi getirilmesi için
        
    }
}

const mutations = {
    updateProductList(state, product) { // array i yani ürün listesini güncelledik.
        state.products.push(product); //array e yeni ürün ekliyor.
    }
}

const actions = {//dış servislere bağlanırız. Dış işlemler yani asenkron çalışma için gerekli. Mutations a aktarır.
    initApp({ commit }) {
        //Vue resource işlemleri
    },
    saveProduct({commit}, payload) {
        //Vue resource işlemleri
    },
    sellProduct({ commit }, payload) {
       //Vue resource işlemleri 
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}