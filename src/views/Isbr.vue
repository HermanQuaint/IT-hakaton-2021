<template>
    <div class="merops">
        <h1 class="merop__sag">
           Избранное
        </h1>
        <div class="blocks">
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
              <div class="block">
              <div class="block__img"><img src="@/assets/img/film.jpg" width="100%" height="100%" alt="" class="block__img--img"><div class="block__img__button"   v-on:click="Isbr"><img  :src="imgAdress" alt=""></div></div>
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
              <div class="block">
              <div class="block__img"><img src="@/assets/img/film.jpg" width="100%" height="100%" alt="" class="block__img--img"><div class="block__img__button" v-on:click="Isbr"><img :src="imgAdress" alt=""></div></div>
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
                <div class="block">
              <div class="block__img"><img src="@/assets/img/film.jpg" width="100%" height="100%" alt="" class="block__img--img"><div class="block__img__button"   v-on:click="Isbr"><img :src="imgAdress" alt=""></div></div>
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
             <div class="block">
              <div class="block__img"><img src="@/assets/img/film.jpg" width="100%" height="100%" alt="" class="block__img--img"><div class="block__img__button"   v-on:click="Isbr"><img :src="imgAdress" alt=""></div></div>
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
             <div class="block">
              <div class="block__img"><img src="@/assets/img/film.jpg" width="100%" height="100%" alt="" class="block__img--img"><div class="block__img__button"   v-on:click="Isbr"><img :src="imgAdress" alt=""></div></div>
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
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            imgAdress: require("../assets/img/Isbr2.svg")
        }
    },
 methods:{
     Isbr(){
         if( this.imgAdress == require("../assets/img/Isbr2.svg")){
               this.imgAdress = require("../assets/img/isbr.svg")
                // document.getElementsByClassName('.block').remove();
         }else {
               this.imgAdress = require("../assets/img/Isbr2.svg")
         }
      
     }
 }
 }

</script>


<style scoped lang="scss">
 .shiftx-enter-active, .shiftx-leave-active {
      transition: all 2s ease-in-out;
   }
   .shiftx-enter, .shiftx-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transform :  translateX(100px);
   }
.merop__sag{
    margin-bottom: 20px;
}
 .blocks{
     display: grid;
     grid-gap: 10px;
     grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
 }
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
