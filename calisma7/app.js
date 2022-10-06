
new Vue({
    el : "#app",
    data : {
        attachedClass : false,
        color : "green"
    },
    computed :{
        divClass : function(){
            return{
                yellow : this.attachedClass, //class yellow olunca false
                blue : !this.attachedClass //class blue olunca true
            }
        }
    }
})