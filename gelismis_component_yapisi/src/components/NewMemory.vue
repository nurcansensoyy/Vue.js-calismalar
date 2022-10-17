<template>
    <div>
      <h1>Yeni Ani Componenti</h1>
      <button @click="counter ++ ">Arttir</button>
      <p>{{counter}}</p>
    </div>
  </template>
  
  <script>
//bir componentten diğerine geçerken yani butonlara bastığımızda diğer component yıkılır ve yeniden yaratılır

  export default {
    data : function(){
        return{
            counter:0,
        }
    },
    destroyed(){
        console.log("Destroyed!!!!!")
    }
  }
  </script>
  
  <style>
  
  </style>
   