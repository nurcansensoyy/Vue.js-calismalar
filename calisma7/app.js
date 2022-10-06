
new Vue({
    el : "#app",
    data : {
        attachedClass : false,
        color : "green",
        yukseklik : 100
    },
    computed :{
        divClass : function(){
            return{
                yellow : this.attachedClass, //class yellow olunca false
                blue : !this.attachedClass //class blue olunca true
            }
        },
        customStyle : function(){
            return {
                backgroundColor : this.color,
                height : this.yukseklik +"px"
            }
        }
    }
})