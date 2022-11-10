import Vue from "vue";

export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    // put işlemi bir tane kayıt ekler bir sonraki eklenecek kaydı var olan kaydın üstüne yazar post gibi sürekli yeni kayıt üretmez
    let tradeData = {
        purchase: state.purchase,
        sale : state.sale
    }
    Vue.http.put("https://urun-islemleri-prod-9d536-default-rtdb.firebaseio.com/products.json", tradeData)
        .then(response => {
          
    })
    
    
}
export const getTradeResult = ({commit}) => { //state içindeki verileri güncelleyeceğimiz için mutations a ihtiyaç var çağırırken de commit kullanılır.
    Vue.http.get("https://urun-islemleri-prod-9d536-default-rtdb.firebaseio.com/products.json")
        .then(response => {
            console.log(response);
            commit("updateTradeResult",response.body)
    })
}