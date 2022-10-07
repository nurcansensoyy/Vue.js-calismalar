new Vue({
  el: '#exercise',
  data: {
    
    effectClass:false,

  },
  methods: {
    startEffect: function() {
    vm = this;
    setInterval(function(){
      vm.effectClass = !vm.effectClass;
    },1000);
    },
  },
  computed : {
    updateEffectClass : function(){
      return {
        highlight:this.effectClass,
        shrink : !this.effectClass
      }
    }
  }
});
