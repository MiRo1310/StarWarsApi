<template>
    <li @click="setInfoNumber(value.url)"
        class="py-3 my-4 text-yellow-400 text-2xl lg:text-sm underline underline-offset-4 cursor-pointer  p-4 border-yellow-400 border-2 mx-4 rounded-lg"
        :class="activeItem()">
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
            value: this.element,
            pageNumberActive: this.pageNumber,
            itemActive: this.item
        }
    },
    computed: {

    },
    methods: {
        activeItem() {
            // console.log(this.item)
            // console.log(this.value.name)
            if (this.item === this.value.name || this.item === this.value.title) {
                return "bg-blue-900 text-white border-yellow-400 border-2"
            }
            else { return "bg-slate-700" }
        },
        setInfoNumber(val) {
            this.$emit("loadInfo", val)

        },
    },
    props: ["element", "pageNumber", "item"]

}
</script>

