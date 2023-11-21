<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  imageUrl:String
})

const exampleStyle = "width: 200px; height: auto; margin:10px"
const count = ref(0)
</script>

<template>
  <!-- pakai vue directive tuh, ada v-bind: href -->
  <h1>{{ msg }}</h1>
  <!-- v-bind untuk source pada Image, pemakaian nya mirip" dengan [style],[class],[src] pada angular -->
  <img :src="imageUrl" style="width: 200px; height: auto; margin:10px"/>
  <img v-bind:src="imageUrl" v-bind:style="exampleStyle"/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
