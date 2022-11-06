<template>
  <div class="bg-black text-yellow-400 text-center">
    <h1 class="  text-7xl p-7 ">{{ title.toLocaleUpperCase() }} </h1>
    <p class="text-xl p-4">{{ planets.length }} Planet aus dem Star Wars Universum</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(planet, index) in planets" :key="planet">

      <StarWarsPlanet :planetprob="planet" :indexprob="index" />
    </div>
  </div>
</template>

<script>
// import { appendFile } from 'fs';
import StarWarsPlanet from './components/StarWarsPlanet.vue'

export default {
  name: 'App',
  components: {
    StarWarsPlanet,
  },
  data() {
    return {
      title: "Star Wars",
      planets: [],
      apiURL: "https://swapi.dev/api/planets/"
    }
  },
  mounted() {
    this.getData(this.apiURL)
  },
  methods: {
    async getData(url) {
      try {
        const response = await this.axios.get(url)
        this.planets = response.data.results
        console.log(response.data.results)
      }catch (err){
        console.log(err)
      }

    },
  },
}
</script>


