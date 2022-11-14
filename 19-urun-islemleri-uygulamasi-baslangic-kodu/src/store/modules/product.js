import Vue from 'vue';
import { router } from '../../router';

const state = {
    products : [] //bir array tutuyoruz ki ürünler bir yerde tutulsun
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) { //ürün çıkışında bir ürün seçildiğinde bilgi getirilmesi için
        return key => state.products.filter(element => {
            return element.key == key;
        })
    }
}

const mutations = {
    updateProductList(state, product) { // array i yani ürün listesini güncelledik.
        state.products.push(product); //array e yeni ürün ekliyor.
    }
}

const actions = {//dış servislere bağlanırız. Dış işlemler yani asenkron çalışma için gerekli. Mutations a aktarır.
    initApp({ commit }) {
        Vue.http.get("https://urun-islemleri-prod-9d536-default-rtdb.firebaseio.com/products.json")
        
            .then(response => {
                console.log(response.body)
                let data = response.body;
                for (let x in data) {
                    data[x].x = x;
                    commit("updateProductList", data[x]);
                }
        })
    },
    saveProduct({dispatch, commit,state}, product) {
        Vue.http.post("https://urun-islemleri-prod-9d536-default-rtdb.firebaseio.com/products.json", product)
            .then((response) => {         //firebase ten gelen cevabı alıyoruz.
// **************Ürün listesinin güncellenmesi***********
                product.key = response.body.name;
                commit("updateProductList", product) 
// **************Alış, satış, bakiye bilgilerinin güncellenmesi************
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch("setTradeResult", tradeResult)
                router.replace("/"); //eski dizinin yerini al
        })
    },
    sellProduct({ commit }, payload) {
        Vue.http.patch("https://urun-islemleri-prod-9d536-default-rtdb.firebaseio.com/products/" + payload.key + ".json")
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}