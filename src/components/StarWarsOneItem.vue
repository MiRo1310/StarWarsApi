
<template>
  <div class="bg-black text-center py-8 border-2 border-yellow-200 m-5 ">
    <h2 class="text-yellow-400 text-2xl" v-if="valueAPI.name">{{ valueAPI.name }}</h2>
    <h2 class="text-yellow-400 text-2xl" v-if="valueAPI.title">{{ valueAPI.title }}</h2>
    <button class="bg-blue-200 rounded p-2 text-gray-700 mt-5" v-on:click="toggleShow">Show Info</button>
    <div class="text-sm" v-if="show">      
      <ul class="text-white">


        <li v-for="(value, key) in valueAPI" :key="value">

          <div v-if="Array.isArray(value)">
            <p>{{
                firstLetterToUpperCase(key)
            }}: </p>
            <div v-for="val in value" v-bind:key="val.name || val.title">
              <a v-on:click="loadSide(val)" class="underline text-yellow-400 my-6" href="#">{{ val }}</a>
            </div>

          </div>
          

          <p v-else>{{ firstLetterToUpperCase(key) }}: {{ value }}</p>

        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarWarsOneItem",
  components: {

  },
  data() {
    return {
      valueAPI: this.valueAPIprob,
      show: true
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    loadSide(url) {
      this.$emit("loadSide-url", url)
    },

    firstLetterToUpperCase(name) {

      const firstLetter = name.slice(0, 1); // Ersten Buchstaben selektieren
      const leftoverLetters = name.slice(1); // Restliche Buchstaben selektieren
      name = firstLetter.toUpperCase() + leftoverLetters; // Erster Buchstabe in Groß + Rest

      return name;
    },

  },
  props: ["valueAPIprob", "indexprob"],

}
</script>
