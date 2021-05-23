<template>
    <div class="headerAdaptiv">
        <div class="headerAdaptiv__block">
            <div class="headerAdaptiv__block__img"><img width="100%" src="@/assets/img/poisk.svg" alt="" class="headerAdaptiv__block__img--img"></div>
          <p v-on:click="openSort" class="headerAdaptiv__block_text">Поиск</p>
        </div>
        <div class="headerAdaptiv__block">
            <div class="headerAdaptiv__block__img"><img width="100%" src="@/assets/img/sob.svg" alt="" class="headerAdaptiv__block__img--img"></div>
            <router-link style="text-decoration:none" to="/merops"><p class="headerAdaptiv__block_text">События</p></router-link>
        </div>
        <div class="headerAdaptiv__block">
            <div class="headerAdaptiv__block__img"><img width="100%" src="@/assets/img/theme.svg" alt="" class="headerAdaptiv__block__img--img"></div>
            <router-link style="text-decoration:none" to="/theme"><p class="headerAdaptiv__block_text">По темам</p></router-link>
        </div>
        <div class="headerAdaptiv__block">
            <div class="headerAdaptiv__block__img"><img width="100%" src="@/assets/img/profile.svg" alt="" class="headerAdaptiv__block__img--img"></div>
             <router-link style="text-decoration:none" to="/profile"><p class="headerAdaptiv__block_text">Профиль</p></router-link>
        </div>
        <transition name="sortAnim">
         <Sort v-if="showSort" class="sortOpen" v-bind:class="{sort:sortActive}"/>
    </transition>
    <button v-on:click="openSort" class="closeSortButton" :class="{closeSort:closeSortx}"></button>
    </div>
</template>

<style lang="scss" scoped>
.headerAdaptiv{
    position: fixed;
    top: 88vh;
    left: 0;
    font-size: 0,7143rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 1px gray solid;
    border-radius: 7px;
    padding-left: 17px;
    padding-right: 17px;
-webkit-box-shadow: 5px 8px 5px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 5px 8px 5px 0px rgba(34, 60, 80, 0.2);
box-shadow: 5px 8px 5px 0px rgba(34, 60, 80, 0.2);
    padding-top: 6px;
    padding-bottom: 6px;
    // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.headerAdaptiv__block{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.headerAdaptiv__block_text{
  color: #767676;
}
.headerAdaptiv__block__img{
  height: 22px;
  width: 22px;
  color: black;
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

</style>

<script>
import Sort from "@/components/Header/Sort.vue"
export default{
    data(){
        return{
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
