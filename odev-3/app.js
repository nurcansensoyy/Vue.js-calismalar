new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timeout : 2000
        },
        computed : {
            result : function (){
                return this.value == 33 ? "Tamamlandı" : "Henüz Bitmedi!!";
            }
        },
        watch : {
            result : function(value){
                vm = this;
                setTimeout(function (){
                    vm.value= 0;
                },this.timeout);
                
            }
        }
    });
