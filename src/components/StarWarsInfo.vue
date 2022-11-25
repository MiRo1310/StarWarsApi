<template>
  <div class="bg-slate-700 text-center py-8 border-2 border-yellow-200 m-5">
    <h2 class="text-yellow-400 text-2xl underline cursor-pointer" v-on:click="loadSide(valueAPI.url)">{{ valueAPI.name
    }}{{ valueAPI.title }}</h2>

    <button class="bg-blue-200 rounded p-2 text-gray-700 my-5" v-on:click="toggleShow">Show / Hide Info</button>
    <div v-if="show">
      <ul class="text-white text-sm">

        <li v-for="(value, key) in valueAPI" v-bind:key="value">
          <template v-if="Array.isArray(value)">
            <p>{{
                firstLetterToUpperCase(key)
            }}: </p>
            <div v-for="val in value" v-bind:key="val[1]">
              <a v-on:click="loadSide(val)" class="underline text-yellow-400 my-6" href="#">{{ val }}</a>
            </div>
          </template>

          <p v-else class="px-6">{{ firstLetterToUpperCase(key) }}: {{ firstLetterToUpperCase(value) }}</p>

        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarWarsInfo",
  components: {

  },
  data() {
    return {
      valueAPI: this.valueAPIprob,
      show: this.oneInfoProb,
    };
  },
  computed: {

  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    loadSide(url) {
      this.$emit("loadSide-url", url)
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
  props: ["valueAPIprob", "indexprob", "oneInfoProb"],

}
</script>
