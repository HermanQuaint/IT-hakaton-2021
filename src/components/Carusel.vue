<template>
  <hooper :settings="hooperSettings">
    <slide class="wrapper" v-for="(poster, indx) in getPosters" :key="indx" :index="indx">
      <h2 class="title">{{ poster.title }}</h2>
      <img class="carusel-img" :src="img" alt="Афиша мероприятия">
    </slide>
  </hooper>

</template>

<script>
import {Hooper, Slide} from 'hooper';
import 'hooper/dist/hooper.css';
import poster from "../store/poster";

export default {
  data: () => ({
    img: poster.image,
    hooperSettings: {
      itemsToShow: 1.5,
      breakpoints: {
        500: {
          itemsToShow: 2
        },
        800: {
          itemsToShow: 3
        },
        1000: {
          itemsToShow: 4
        }
      }
    }

  }),
  methods: {},

  computed: {
    getPosters() {
      return this.$store.getters['poster/getPosters']
    },
    getPoster() {
      return this.$store.getters['poster/getPoster']
    },

    //getPosters() {
    //return this.$store.getters.getPosters
    //},

  },
  async mounted() {
    console.log(this.$store.state.posters)
  },
  created() {
    this.$store.dispatch('poster/getAll')
  },
  name: 'Carusel',
  components: {
    Hooper,
    Slide
  }
};
</script>

<style scoped>
.carusel-img {
  width: 100%;
}

.wrapper {
  margin-right: 15px;

  width: 170px;
  height: 150px;

  background-color: gray;
  border-radius: 20px;
}

.title {
  margin-left: 10px;
  font-size: 1rem;

}

@media (min-width:800px) {
  .title {
    font-size: 1.3rem;
  }
  .wrapper {
    height: 150px !important;
  }
}
@media (min-width:1000px) {
  .title {
    font-size: 1.3rem;
  }
  .wrapper {
    height: 200px;
  }
}


</style>