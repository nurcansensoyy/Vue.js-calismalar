new Vue({
   el : "#app",
   data : {
    player_heal : 100,
    monster_heal : 100,
    game_is_on : false,
   },
   methods : {
    start_game : function(){
        this.game_is_on = true;
    },
    attack : function(){
        var point = Math.ceil(Math.random()* 10); //math.ceil ile virgülsüz değer alırız 
        //this.monster_heal = this.monster_heal - point;
        this.monster_heal -= point;

        this.monster_attack(); //oyuncu her saldırdığında monster da ona saldırmalı.
    },
    special_attack : function(){
        var point = Math.ceil(Math.random()* 25);  // 25 yaptıkdaha güçlü saldırı olması için.
        this.monster_heal -= point;
        
        this.monster_attack();
    },
    heal_up : function(){ //İLK YARDIM
        var point = Math.ceil(Math.random()* 20); //math.ceil ile virgülsüz değer alırız 
        //this.monster_heal = this.monster_heal - point;
        this.player_heal += point;

        this.monster_attack();
    },
    give_up : function(){ //PES ET
        this.player_heal = 0;
    },
    monster_attack : function() {
        var point = Math.ceil(Math.random()* 15); 
        this.player_heal -= point;
    }
   }  
});