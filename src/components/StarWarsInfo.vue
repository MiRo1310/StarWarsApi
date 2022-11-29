<template>
  <div class="bg-slate-700 text-center py-8 border-2 ml-0 border-yellow-400 m-4 rounded-lg">
    <h2 class="text-yellow-400 text-3xl underline underline-offset-4">{{ itemTitle
    }}</h2>
    <br>
    <ul class="text-white text-xl ">

      <li v-for="(value, key, index) in response[page][pageNumber]" :key="index">
        <template v-if="Array.isArray(value)">
          <p class="lg:text-sm"> {{
              firstLetterToUpperCase(key)
          }} :</p>
          <template v-if="value.length != 0">
            <ul class="mb-2">
              <li v-for="val in value" v-bind:key="val">
                <a class="underline underline-offset-4 lg:text-sm text-yellow-400 my-6" @click="loadInfo(val)"
                  href="#">{{
                      loadNameOrTitle(val)
                  
                  }}
                </a>
              </li>
            </ul>


          </template>
          <template v-else>
            <p class="lg:text-sm underline-offset-4 text-yellow-400 my-2">Not
              defined</p>
          </template>
        </template>


        <template v-else-if="checkValue(value, key)">
          <p class="lg:text-sm">{{
              firstLetterToUpperCase(key)
          }}: </p>
          <ul class="mb-2">
            <li>
              <a @click="loadInfo(value)" class="underline underline-offset-4 lg:text-sm text-yellow-400 my-6 mb-2"
                href="#">
                {{ loadNameOrTitle(value) }}
              </a>
            </li>
          </ul>
        </template>
        <p v-else class="px-6 lg:text-sm">{{ firstLetterToUpperCase(key) }}: {{ firstLetterToUpperCase(value) }}</p>

      </li>

    </ul>

  </div>
</template>

<script>

export default {
  name: "StarWarsInfo",
  components: {

  },
  data() {
    return {

    };
  },
  computed: {
    itemTitle() {
      let value = "";
      let property = this.response[this.page][this.pageNumber]
      if (property.name) {
        value = property.name
      } else if (property.title) {
        value = property.title
      }
      return value;
    },

  },

  methods: {
    arrayLength(array) {
      console.log(array)
      if (array.length != 0) return true
      else return false
    },
    loadInfo(val) {
      this.$emit("loadInfo", val)
    },
    checkValue(value, key) {
      if (this.page != "films") {
        if (value.indexOf('https') >= 0 && key != 'url') {
          return true
        }
      }
    },

    loadNameOrTitle(url) {
      let element = url.replace("https://swapi.dev/api/", "")
      let page = element.slice(0, element.indexOf("/"))
      this.pageToGo = page
      try {
        let item = this.response[page].find(element => element.url == url)
        // console.log(item)
        if (item != undefined) {
          if (item.name) { return item.name }
          else if (item.title) { return item.title }
          else { return "" }
        }

      } catch (error) {
        console.log(error)
      }



    },

    firstLetterToUpperCase(name) {

      if (typeof (name) == "string") {
        const firstLetter = name.slice(0, 1); // Ersten Buchstaben selektieren
        const leftoverLetters = name.slice(1); // Restliche Buchstaben selektieren
        name = firstLetter.toUpperCase() + leftoverLetters; // Erster Buchstabe in Groß + Rest


      }
      return name;
    },

  },
  props: ["response", "page", "pageNumber"],

}
</script>
