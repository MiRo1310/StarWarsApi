<template>
    <li @click="setInfoNumber(value.url)"
        class="py-3 my-4 text-yellow-400 text-2xl lg:text-sm underline underline-offset-4 cursor-pointer  bg-slate-700 p-4 border-yellow-400 border-2 mx-4 rounded-lg">
        <a href="#">{{
                value.name
        }} {{ value.title }}

        </a>
    </li>
</template>

<script>
export default {
    name: "StarWarsNav",
    data() {
        return {
            value: this.element
        }
    },
    methods: {
        setInfoNumber(val) {
            this.$emit("loadInfo", val)
            console.log(val)
        },
    },
    props: ["element"]

}
</script>

<style scoped>

</style>