new Vue({
   el : "#app",
   data : {
    player_heal : 100,
    monster_heal : 100,
    game_is_on : false,
    attack_multiple :10,
    special_attack_multiple : 25,
    heal_up_multiple : 20,
    monster_attack_multiple : 15,
    log_text : {
        attack : "OYUNCU ATAĞI :",
        special_attack :"ÖZEL OYUNCU ATAĞI : ",
        monster_attack : "CANAVAR ATAĞI :",
        heal_up : "İLK YARDIM",
        give_up : "OYUNCU PES ETTİ!!"
    },
    logs : [],
   },
   methods : {
    start_game : function(){
        this.game_is_on = true;
    },
    attack : function(){
        var point = Math.ceil(Math.random()* this.attack_multiple); //math.ceil ile virgülsüz değer alırız 
        //this.monster_heal = this.monster_heal - point;
        this.monster_heal -= point;

        this.add_to_log({turn : "p", text : this.log_text.attack + point});

        this.monster_attack(); //oyuncu her saldırdığında monster da ona saldırmalı.
    },
    special_attack : function(){
        var point = Math.ceil(Math.random()* this.special_attack_multiple);  // 25 yaptık daha güçlü saldırı olması için.
        this.monster_heal -= point;

        this.add_to_log({turn : "p", text : this.log_text.special_attack + point});

        this.monster_attack();
    },
    heal_up : function(){ //İLK YARDIM
        var point = Math.ceil(Math.random()* this.heal_up_multiple); //math.ceil ile virgülsüz değer alırız 
        //this.monster_heal = this.monster_heal - point;
        this.player_heal += point;

        this.add_to_log({turn : "p", text : this.log_text.heal_up + point});

        this.monster_attack();
    },
    give_up : function(){ //PES ET
        this.player_heal = 0;
        this.add_to_log({turn : "p", text : this.log_text.give_up});
    },
    monster_attack : function() {
        var point = Math.ceil(Math.random()* this.monster_attack_multiple); 
        this.player_heal -= point;

        this.add_to_log({turn : "m" ,text : this.log_text.monster_attack + point});
    },
    add_to_log : function(log){
        this.logs.push(log); //logs array inin içine log objelerini pushladık.
    }
   },
   watch : { //watch ile canlarını kontrol ettik

    player_heal : function(value){ //value burada player_heal ın aktif değişen değeridir 3 se3 5 se 5 
        if (this.player_heal <= 0){
            this.player_heal = 0;
            
            if(confirm("Oyunu KAYBETTİN. Tekrar denemek ister misin?")){
                this.player_heal = 100;
                this.monster_heal = 100;
                this.logs = [];
            }
        }
        else if(this.player_heal >= 100){
            this.player_heal = 100;
        }
    },

    monster_heal : function(value){ //value burada monster_heal ın aktif değişen değeridir 3 se3 5 se 5 
        if (this.monster_heal <= 0){
            this.monster_heal= 0;

            if(confirm("Oyunu KAZANDIN. Tekrar denemek ister misin?")){
                this.player_heal = 100;
                this.monster_heal = 100;
                this.logs = [];
            }
            
        }
   },
   }
});