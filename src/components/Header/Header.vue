<template>
    <div class="head">
        <header>
              <router-link to="/" style="text-decoration: none">
            <div class="header__logo">
               <img src="@/assets/img/logo.svg" alt="" width="" class="header__logo__img">
               <!-- <p class="header__logo__text"></p> -->
            </div></router-link>
            <div class="header__poisk"><input type="text" placeholder="Поиск..."><button v-on:click="openSort" class="header__poisk__knopka"></button>
            </div>
            <div class="header__user">
                <router-link to="/merops" style="text-decoration: none"> <p class="header__user_sob">события</p></router-link>
                <p class="header__user_tema">по темам</p>
                <!-- <p class="header__user_name">{{ username }}</p> -->
            <router-link to="/profile"><img src="@/assets/img/user.svg" alt="" class="header__user__img" width="45px" height="45px"></router-link>
                <!-- <img src="@/assets/img/vhod.svg" alt="" class="header__user__strelka"> -->
            </div>
        </header>
        <div class="header__poisk__adaptiv"><input type="text" placeholder="Поиск..."><button v-on:click="openSort"  class="header__poisk__knopka"></button></div>
    <transition name="sortAnim">
         <Sort v-if="showSort" class="sortOpen" v-bind:class="{sort:sortActive}"/>
        
    </transition>
     <button v-on:click="openSort" class="closeSortButton" :class="{closeSort:closeSortx}"></button>
    </div>
</template>

<style  lang="scss">
.bodyHidden{
    overflow: hidden;
}
.closeSortButton{
    display: none;
    position: absolute;
    top: 50%;
    background-image: url('https://i7.uihere.com/icons/463/957/166/arrow-down-1aacef064e1555af4f1e88da3071a8d9.png');
}
.sortAnim-active-enter{
transition: all .1s ease;
}
.sortAnim-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.sortAnim-enter, .sortAnim-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.sortOpen{
    position: absolute;
    z-index: -9999;
    top: 45px;
    left:20%;
    transition: .5s;
    transition-duration: 2s;
}
.sort{
   position: absolute;
   z-index: -9999;
   top:0px;
   transition: .5s;
    transition-duration: 2s;
}
.head{
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.silka{
    text-decoration: none;
}
header{
    width: 100%;
    display: flex;
    align-items: center;
   justify-content: space-between;
}
.header__logo{
    width: 15%;
    margin-right: 2%;
}
.header__user_sob{
    color: #FFAC0B;
}
.header__poisk__adaptiv{
    display: none;
     border-radius: 20px;
        padding-top:15px;
        padding-bottom: 15px;
        padding-left: 20px;
        background: url("/img/user.svg")  no-repeat 3px 1px;
}
.header__poisk__knopka{
    width: 30px;
  height: 30px;
   position: relative;
   right: 10%;
   top:5px;
   background-image: url("https://www.shareicon.net/data/2016/06/12/589815_multimedia_512x512.png");
  background-repeat: no-repeat;
        background-position: center;
        background-size: 20px;
        background-color: white;
        border: 0;
    // left: 90%;
    // bottom: 30px;
    // z-index: 9999;
}
.header__poisk{
    width: 55%;
    position: relative;
    z-index: 999;
    display: flex;

    input{
        width: 100%;
        border-radius: 20px;
        padding-top:10px;
         outline:none;
        padding-bottom: 10px;
        padding-left: 35px;
        background: url("https://www.iconninja.com/files/647/860/906/search-icon.png")  no-repeat 3px 1px;
        background-position: 10px;
        background-size: 20px;
    }
}
.header__user{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    p{
        margin-right: 1vw;
    }
    img{
        margin-right: 1vw;
    }
    &:last-child{
        margin-right: 0;
    }
}
// адаптив
@media screen and (max-width: 886px) {
    .closeSort{
        display: block;
        position: absolute;
        outline: none;
        border: none;
        background-color: white;
        top: 50%;
        left: 47%;
        width: 30px;
        height: 30px;
        z-index: 9999999;
        position: absolute;
        background-size: 15px;
        background-repeat: no-repeat;
        background-position: center;
    }
.header__logo__img{
    width: 100%;
}
    .header{
        display: flex;
        justify-content: space-between;
        margin:0;
    }
    .header__logo{
        width: 5%;
    }
    .sortAnim-active-enter{
transition: all 0.5s ease;
}
.sortAnim-leave-active {
  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.sortAnim-enter, .sortAnim-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateY(0px);
  opacity: 0;
}
    .header__poisk{
        display: none;
        width:0;
    }
    .header__logo{
        width: auto;
    }
    .header__user{
        width: auto;
      margin-bottom: 1vw;
       
    }
    .header__poisk__adaptiv{
         display: flex;
         padding: 0;
        width: 100%;
        input{
             width: 100%;
        border-radius: 20px;
        padding-top:15px;
        padding-bottom: 15px;
        padding-left: 35px;
        background: url("https://www.iconninja.com/files/647/860/906/search-icon.png")  no-repeat 3px 1px;
        background-position: 10px;
        background-size: 20px;
         outline:none;
        }
        display: block;
    }
    .header__poisk__knopka{
   position: relative;
    top: -40px;
    left: 90%;
}
.sort{

    width: 100vw;
   transition: 0;
    transition-duration: 0;
}
.sortOpen{
  position: absolute;
    z-index: 9999;
    top:0;
    left:0;
    transition: 0;
    transition-duration: 0;
    transition: 0;
    transition-duration: 0;
}
}

</style>



<script>
import Sort from "@/components/Header/Sort.vue"
export default{
    data(){
        return{
             username: "егор",
             sortActive:true,
             showSort:false,
             closeSortx:false,
        }
    },
    components:{
        Sort
    },
    methods:{
     openSort(){

         document.querySelector('body').classList.toggle('bodyHidden');
        this.sortActive = !this.sortActive;
        this.showSort = !this.showSort;
        this.closeSortx = !this.closeSortx
       
     }
 }
}
</script>
