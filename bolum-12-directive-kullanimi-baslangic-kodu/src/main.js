import Vue from 'vue'
import App from './App.vue'

Vue.directive("color", {
  bind(el, binding, vnode) {
    if (binding.arg == "background") { //eğer background varsa arka planın rengi değişecek yoksa yazının rengi kırmızı olacak
          el.style.backgroundColor = binding.value; //binding.value ile string veriyi aldık
    } else {
      el.style.color = binding.value;
    }
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
