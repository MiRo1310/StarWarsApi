<template>
  <div class="bg-black text-yellow-400 text-center">
    <h1 class="  text-7xl p-7 cursor-pointer " v-on:click="this.getData(this.apiURL)">{{ title.toLocaleUpperCase() }}
    </h1>
    <nav class="text-4xl flex ">
      <p v-on:click="this.getData('https://swapi.dev/api/planets/')">Planets</p>
      <p class="px-10 cursor-pointer " v-on:click="this.getData('https://swapi.dev/api/people/')">People</p>
      <p class="px-10 cursor-pointer " v-on:click="this.getData('https://swapi.dev/api/films/')">Films</p>
      <p class="px-10 cursor-pointer " v-on:click="this.getData('https://swapi.dev/api/vehicles/')">Vehicles</p>
      <p class="px-10 cursor-pointer " v-on:click="this.getData('https://swapi.dev/api/starships/')">Starships</p>
      <p class="px-10 cursor-pointer " v-on:click="this.getData('https://swapi.dev/api/species/')">Species</p>

    </nav>

    <p class="text-xl p-4">{{ response.length }} {{ page }} of the Star Wars Universe</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(value, index) in response" :key="`${value}${response[1]}`">
      <StarWarsList v-if="!this.singleInfo" :valueAPIprob="value" :indexprob="index" @loadSide-url="loadSide" />
    </div>
  </div>
  <StarWarsOneItem class="mx-96" v-if="this.singleInfo" :valueAPIprob="response" @loadSide-url="loadSide" />
</template>

<script>
// import { appendFile } from 'fs';
import StarWarsList from './components/StarWarsList.vue'
import StarWarsOneItem from './components/StarWarsOneItem.vue'

export default {
  name: 'App',
  components: {
    StarWarsList,
    StarWarsOneItem,
  },
  data() {
    return {
      title: "Star Wars",
      response: [],
      apiURL: "https://swapi.dev/api/planets/",      
      singleInfo: false,
      actualUrl: "",
      page: "",
    }
  },
  mounted() {
    this.getData(this.apiURL)
  },
  computed: {


  },
  methods: {
    async getData(url) {
      console.log(url)
      this.actualUrl = url;
      this.singleInfo = false;
      this.response = []
      this.getPage();
      try {
        const response = await this.axios.get(url)
        if (response.data.results) {
          this.response = response.data.results
          console.log(response.data.results)
        } else {
          this.response = response.data
          console.log(response.data)
        }
        if (url.match(/[0-9]/)) {
          this.singleInfo = true
        } else {
          this.singleInfo = false
        }




      } catch (err) {
        console.log(err)
      }
    },
    getPage() {
      let page = this.actualUrl.replace("https://swapi.dev/api/", "")
      this.page = this.firstLetterToUpperCase(page.slice(0, page.indexOf("/")))


    },
    firstLetterToUpperCase(name) {

      const firstLetter = name.slice(0, 1); // Ersten Buchstaben selektieren
      const leftoverLetters = name.slice(1); // Restliche Buchstaben selektieren
      name = firstLetter.toUpperCase() + leftoverLetters; // Erster Buchstabe in Groß + Rest

      return name;
    },
    loadSide(val) {

      console.log(val)
      this.getData(val)
    }
  },
}
</script>


