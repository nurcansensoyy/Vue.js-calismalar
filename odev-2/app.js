new Vue({
        el: '#exercise',
        data: {
            value: 'elma'
        },
        methods : {
            showAlert : function(){
                alert();
            },
            func : function(event){
                this.value = event.target.value;
            }


        }
    });