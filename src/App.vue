<template >
  <header class=" bg-gray-800 text-yellow-400 text-center border-b-4 border-yellow-400 border-double pb-4">
    <h1 class="  text-6xl p-5 cursor-pointer " v-on:click="this.start = true">{{ title.toLocaleUpperCase() }}
    </h1>
    <!-- Navigation -->
    <!-- <nav :class="`lg:grid-cols-${Object.keys(this.response).length}`" -->
    <!--Mal funktionierte es mal wieder nicht-->
    <nav :class="`lg:grid-cols-6`"
      class="grid grid-cols-2 sm:grid-cols-4 underline-offset-4 lg:text-2xl text-3xl justify-center ">
      <template v-for="(item, key) in response" :key="key.item">
        <p class="mr_hyperlink" v-on:click="loadPage(key)">{{ firstLetterToUpperCase(key) }}</p>
      </template>
    </nav>

    <p v-if="start == false" class="text-xl p-2 my-2">{{ this.response[page].length }} {{
        firstLetterToUpperCase(this.page)
    }} of the
      Star Wars Universe</p>
  </header>
  <div class="grid grid-cols-4 text-white ">
    <nav v-if="start == false" class="border-r-4 border-yellow-400 border-double">
      <ul>
        <StarWarsNav v-for="(element) in this.response[this.page]" :element="element" :key="element"
          @loadInfo="loadInfo" />

      </ul>
    </nav>
    <div class="col-span-3" v-if="start == false && pageNumber != null">

      <StarWarsInfo :response="this.response" :page="this.page" :pageNumber="this.pageNumber" @loadInfo="loadInfo" />
    </div>
    <div class=" col-span-3 self-center">
      <!-- Bild-Info-Feld -->
      <img v-if="start == false && pageNumber == null" class="w-10/12 px-24 mx-auto my-10" :src="selectPic"
        alt="Darth Vader">
    </div>

  </div>
  <div v-if="start == true">
    <!-- <img class="mainPic m-auto mt-8" src="./assets/img/star-wars-main.jpg" alt="Darth Vader"> -->
    <img class="mainPic m-auto mt-8" src="./assets/img/star-wars-main.jpg" alt="Darth Vader">
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
      response: {},
      apiURL: "https://swapi.dev/api/",
      oneInfo: false,
      actualUrl: "",
      page: "",
      pageNumber: null,
      numberItem: null,
      item: "",
      start: true
    }
  },
  mounted() {
    this.getData(this.apiURL)
  },
  computed: {
    selectPic() {
      console.log(this.page)
      return require(`@/assets/img/${this.page}.jpg`)
    },
  },
  methods: {
    activeLink(key) {
      if (key === this.page)
        return "bg-blue-600 text-white"

    },
    loadPage(key) {
      this.start = false
      this.page = key
      this.pageNumber = null
    },
    async getApiData(url) {
      try {
        const response = await this.axios.get(url)

        if (response.data.results) {
          return response.data.results
        } else if (response.data) {
          return response.data
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getData(url) {
      const result = await this.getApiData(url)
      for (let item in result) {

        this.response[item] = await this.getApiData(result[item])

      }
      console.log(this.response)
    },

    firstLetterToUpperCase(name) {
      const firstLetter = name.slice(0, 1); // Ersten Buchstaben selektieren
      const leftoverLetters = name.slice(1); // Restliche Buchstaben selektieren
      name = firstLetter.toUpperCase() + leftoverLetters; // Erster Buchstabe in Groß + Rest
      return name;
    },

    getCategory(url) {
      let element = url.replace("https://swapi.dev/api/", "")
      return element.slice(0, element.indexOf("/"))

    },

    loadInfo(val) {
      const category = this.getCategory(val)
      console.log("Category " + category)
      this.page = category;
      let item = this.response[category].find(element => element.url == val)
      this.pageNumber = (this.response[category].indexOf(item))
      console.log("Pagenumber " + this.pageNumber)
    },
  },
}
</script>

<style>
.mainPic {
  width: 60%;

}
</style>


