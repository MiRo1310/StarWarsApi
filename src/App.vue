<template>
  <div class="bg-black text-yellow-400 text-center">
    <h1 class="  text-7xl p-7 cursor-pointer " v-on:click="this.start = true">{{ title.toLocaleUpperCase() }}
    </h1>
    <nav class="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-4 text-3xl justify-center">

      <p class="mr_hyperlink" v-on:click="this.getData('https://swapi.dev/api/planets/')">Planets</p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/people/')">People</p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/films/')">Films </p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/vehicles/')">Vehicles
      </p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/starships/')">Starships
      </p>
      <p class="px-10 cursor-pointer underline" v-on:click="this.getData('https://swapi.dev/api/species/')">Species</p>
    </nav>

    <p v-if="start == false" class="text-xl p-2 my-6">{{ response.length }} {{ firstLetterToUpperCase(item) }} of the
      Star Wars Universe</p>
  </div>
  <div class="grid grid-cols-4 text-white m-6">
    <nav v-if="start == false">
      <ul>
        <StarWarsNav v-for="(element, index) in this.globalResponse" :element="element" :key="index" />

      </ul>
    </nav>
    <div class="col-span-3" v-if="start == false">
      <div v-if="!this.oneInfo" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(value, index) in response" :key="`${value}${response[1]}`">
          <StarWarsInfo v-if="!this.oneInfo" :valueAPIprob="value" :indexprob="index" :oneInfoProb="this.oneInfo"
            @loadSide-url="loadSide" />
        </div>
      </div>
      <StarWarsInfo class="mx-96 p-8" v-if="this.oneInfo" :valueAPIprob="response" :oneInfoProb="this.oneInfo"
        @loadSide-url="loadSide" />
    </div>

  </div>
  <div v-if="start == true">
    <img class="mainPic m-auto" src="./assets/img/star-wars-main.jpg" alt="Dart Vader">
  </div>
</template>

<script>
import StarWarsInfo from './components/StarWarsInfo.vue'
import StarWarsNav from './components/StarWarsNav.vue'


export default {
  name: 'App',
  components: {
    StarWarsInfo, StarWarsNav,
  },
  data() {
    return {
      title: "Star Wars",
      response: [],
      globalResponse: [],
      apiURL: "https://swapi.dev/api/planets/",
      oneInfo: false,
      actualUrl: "",
      page: "",
      numberItem: null,
      item: "",
      start: true
    }
  },
  // mounted() {
  //   this.getData(this.apiURL)
  // },
  computed: {
  },
  methods: {
    async getData(url) {
      console.log(url)
      this.actualUrl = url;
      this.oneInfo = false;
      this.response = []
      this.globalResponse = []
      this.getPage();
      try {
        const response = await this.axios.get(url)
        let response2;
        if (this.item) {
          const mainUrl = "https://swapi.dev/api/" + this.item + "/"
          response2 = await this.axios.get(mainUrl)
        }
        this.globalResponse = response2.data.results
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
        this.start = false;




      } catch (err) {
        console.log(err)
      }
    },
    getPage() {

      let page = this.actualUrl.replace("https://swapi.dev/api/", "")
      this.item = page.slice(0, page.indexOf("/"))
      let url = "https://swapi.dev/api/" + this.item + "/"
      this.numberItem = this.actualUrl.replace(url, "").replace("/", "")
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

<style>
body {
  width: 100%;
}

.mainPic {
  width: 60%;

}
</style>


