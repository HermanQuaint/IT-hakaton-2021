<template>
    <div class="sortirovka">
        <div class="sortirovka__info">
        <span class="sortirovka__text">Дата</span>
        <span class="sortirovka__text">Цена</span>
        <span class="sortirovka__text">Категория</span>
        </div>
    </div>
</template>

<style>
  .sortirovka{
    border-radius: 0px 0px 10px 10px;
    width: 47%;
    padding-top: 30px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
   border: 1px solid #000000;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-top:0;
  }
   .sortirovka__info{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
 
  @media screen and (max-width: 886px) {
    .sortirovka{
        width: 99vw;
        height: 99vh;
       background: rgba(0, 0, 0, 0.9);
       border-radius:0;
       padding-left: 0;
       padding-right: 0;
    }
    .sortirovka__text{
        margin-bottom: 30px;
    }
    .sortirovka__info{
        padding-top: 5vh;
        align-items: center;
          display: flex;
          position: absolute;
          border-radius: 22px 22px 0px 0px;
         top:50vh;
      width:100%;
      flex-direction: column;
      
        background-color: white;
        height: 50vh;
    }
 
 }


</style>

<script>
export default{
methods:{
     openSort(){
        this.sortActive = !this.sortActive;
        this.showSort = !this.showSort
     }}}
</script>
