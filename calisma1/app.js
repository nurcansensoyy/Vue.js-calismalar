new Vue({
    el : "#app",
    data : {
        title : "Merhaba",
        description : "Bu bir aciklamadir."
    },
    methods : {
        changeTitle : function(event){
        this.description = event.target.value;
        }
    }
});
