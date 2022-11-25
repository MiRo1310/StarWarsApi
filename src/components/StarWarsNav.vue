<template>
    <li class="p-6 text-yellow-400 text-2xl underline cursor-pointer"><a href="">{{ value.name }} {{ value.title }}</a>
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
    props: ["element"]

}
</script>

<style>

</style>