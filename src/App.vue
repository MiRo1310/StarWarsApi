<template>
  <div class="bg-black text-yellow-400 text-center">
    <h1 class="  text-7xl p-7 cursor-pointer " v-on:click="this.getData(this.apiURL)">{{ title.toLocaleUpperCase() }}
    </h1>
    <nav class="text-3xl flex justify-center">
      <p class="mr_hyperlink" v-on:click="this.getData('https://swapi.dev/api/planets/')">Planets</p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/people/')">People</p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/films/')">Films </p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/vehicles/')">Vehicles
      </p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/starships/')">Starships
      </p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/species/')">Species</p>
    </nav>

    <p class="text-xl p-2 my-6">{{ response.length }} {{ page }} of the Star Wars Universe</p>
  </div>

  <div v-if="!this.oneInfo" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="(value, index) in response" :key="`${value}${response[1]}`">
      <StarWarsList v-if="!this.oneInfo" :valueAPIprob="value" :indexprob="index" :oneInfoProb="this.oneInfo"
        @loadSide-url="loadSide" />
    </div>
  </div>
  <StarWarsList class="mx-96 p-8" v-if="this.oneInfo" :valueAPIprob="response" :oneInfoProb="this.oneInfo"
    @loadSide-url="loadSide" />
</template>

<script>
import StarWarsList from './components/StarWarsList.vue'


export default {
  name: 'App',
  components: {
    StarWarsList,
  },
  data() {
    return {
      title: "Star Wars",
      response: [],
      apiURL: "https://swapi.dev/api/planets/",
      oneInfo: false,
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
      this.oneInfo = false;
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
          this.oneInfo = true
        } else {
          this.oneInfo = false
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


