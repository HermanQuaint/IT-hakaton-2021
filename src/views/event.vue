<template>
  <div>
    <Header/>
    <article>
      <h1>{{ title }}</h1>
      <p>{{ address }}</p>
      <p>{{ data }}</p>
      <p>{{ data }}</p>
      <p>{{ price }}</p>
      <p>{{ categories }}</p>
    </article>
    <img src="{{ image }}" alt="">
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue"

export default{
  name:"event",
  components:{
    Header
  }
}
</script>

<style scoped>

</style>