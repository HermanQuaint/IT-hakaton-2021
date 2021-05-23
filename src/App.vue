<template>
  <div id="app">
    <div class="container">
       <Header v-show="proverkaOkna" class="shapka"/>
       <router-link to="/" style="text-decoration: none">
            <div class="header__logo">
               <img src="@/assets/img/logo.svg" alt="" width="" class="header__logo__img">
            </div></router-link>
       <HeaderAdaptiv v-show="!proverkaOkna"/>
      <router-view style="width:100%"/> 
    </div>
  </div>
</template>

<style lang="scss">

.shapka{
  margin-bottom: 40px;
}

@media screen and (max-width: 886px) {
 .shapka{
   margin-bottom: 10px;
 }
}
</style>


<script>
import Header from "@/components/Header/Header.vue"
import {dispatch, getters} from "@/store"
import HeaderAdaptiv from "@/components/Header/HeaderAdaptiv.vue"
export default{
  data(){
    return{
      width: null,
      proverkaOkna: true
    }
  },
  name:"app",
  components:{
    Header,
    HeaderAdaptiv
  },
  computed: {
     posters() {
       return getters['poster/getPosters']
     },

  },
  created() {
     dispatch('poster/getAll')
    // dispatch('poster/getById', 1)

    dispatch('poster/getAll').then((posters) => {
      return posters;
    })

    window.addEventListener('resize', this.updateWidth);  //отслеживание разрешения
    this.updateWidth();
  },
 methods:{
   getWidth(){
      const xyz = window.screen.width;
      console.log(xyz);
   },
   updateWidth() {
      this.width = window.innerWidth;
    if (this.width <830){
      this.proverkaOkna = !this.proverkaOkna
    }
   }
  
 }
}

  
</script>
