<template>
  <div class="home">
    <h1 class="visually-hidden">Главная страница</h1>
    <Header/>
    <section>
      <h2 class="title">Избранное</h2>
      <Carusel/>
    </section>
    <section>
      <h2 class="title">Скоро</h2>
      <Carusel/>
    </section>
    <section>
      <h2 class="title">По темам</h2>
      <Carusel/>
    </section>
  </div>
</template>

<script>
import Carusel from "@/components/Carusel.vue";

export default {
  name: 'Home',
  components: {
    Carusel
  }

}
</script>

<style>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0)
}
.title {
  margin-bottom: 15px;
}
</style>