<template>
  <div class="bg-black text-center py-12 border-2 border-yellow-200 m-5 ">
    <h2 class="text-yellow-400 text-2xl">{{ planet.name }}</h2>
    <button class="bg-blue-200 rounded p-2 text-gray-700 mt-5" v-on:click="toggleShow">Show Info</button>
    <div v-if="show">
      <p class="text-yellow-400 my-6 underline">Info des Planeten</p>
      <ul class="text-white">

        <li v-for="(value, key) in planet" :key="value">          
          {{checkKey(key, value)}}
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarWarsPlanet",
  components: {
    
  },
  data() {
    return {
      planet: this.planetprob,
      show: false
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    firstLetterToUpperCase(name) {
      const firstLetter = name.slice(0, 1); // Ersten Buchstaben selektieren
      const leftoverLetters = name.slice(1); // Restliche Buchstaben selektieren
      name = firstLetter.toUpperCase() + leftoverLetters; // Erster Buchstabe in Groß + Rest

      return name;
    },
    checkKey(key, value){      
      if (!(key == "name" || key == "films" || key == "residents")){   
        return `${this.firstLetterToUpperCase(key)}: ${value}`
      }else if (key == "residents" ){
        return `${this.firstLetterToUpperCase(key)}: ${this.planet[key].length}`
      }else if (key == "films" ){
        return `${this.firstLetterToUpperCase(key)}: ${this.planet[key].length}`
      }
    }
  },
  props: ["planetprob", "indexprob"],

}
</script>
