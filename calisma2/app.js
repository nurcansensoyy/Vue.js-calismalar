new Vue({
    el : "#app",
    data : {
        title : "merhaba, ",
        message :"nurcan",
        link : "https://www.google.com/",
        blogLink : "<a href='https://www.google.com/'>Link </a>",
    },
    methods : {
        hello : function(){
            this.title = "merhaba!!"
            return this.title;
        }
    }
});
