
new Vue({
    el : "#app",
    data : {
        attachedClass : false
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