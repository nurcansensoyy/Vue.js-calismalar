Vue.component('my-comp',{
    data : function(){
       return {
        status : "Pasif"
       }
    },

    template : "<p> Sunucu Durumu : {{ status }} </p>"
});



new Vue({
    el : "#app",
});