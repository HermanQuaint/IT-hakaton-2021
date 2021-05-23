<template>
       <div class="block">
              <div class="block__img"><router-link to="/merop"><img src="@/assets/img/film.jpg" width="100%" height="100%" alt="" class="block__img--img"></router-link><div  v-on:click="Isbr" class="block__img__button"><img :src="imgAdress" alt=""></div></div>
              <div class="block__info">
                  <div class="block__absaz">
                     Таким образом, сложившаяся структура организации
                  </div>
                  <div class="block__dopInfo">
                      <div class="block__dopInfo__category">
                          категория
                      </div>
                      <div class="block__dopInfo__data">с 1 по 7 мая</div>
                  </div>
              </div>
            </div>
</template>


<style lang="scss" scoped>

.block{
    border: 1px solid rgba(0, 0, 0, 0.12);
    margin: auto;
    width: 35%;
    min-width: 296px;
    max-width: 350px;
    height: 270px;
    margin-bottom: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px;
    text-decoration: none;
    color: black;
}
.block__img{
 height: 55%;
 margin-bottom: 7px;
 border-radius: 8px
}
.block__img--img{
  border-radius: 8px
 }
 .block__info{
     display: flex;
     flex-direction: column;
 }
 .block__dopInfo{
     align-items: center;
     display: flex;
     justify-content: space-between;
 }
 .block__absaz{
     margin-bottom: 42px;
 }
 .block__dopInfo__category{
     background-color:#FFAC0B;
     padding: 5px;
     padding-left: 10px;
     padding-right: 10px;
     border-radius: 12px;
 }
 .block__img__button{
     cursor: pointer;
     width: 32px;
     display: flex;
     align-items: center;
     border-radius: 5px;
       justify-content:center;
     height: 32px;
     position: relative;
     top: -140px;
     left: 88%;
     background-color: gray;
 }
@media screen and (max-width: 970px) {
    .block{
    width:100%;
    }
}

</style>


<script>
export default{
    data(){
        return{
            imgAdress: require("@/assets/img/isbr.svg")
        }
    },
 methods:{
     Isbr(){
         if( this.imgAdress == require("@/assets/img/Isbr2.svg")){
               this.imgAdress = require("@/assets/img/isbr.svg")
         }else {
               this.imgAdress = require("@/assets/img/Isbr2.svg")
         }
      
     }
 },

 }

</script>
