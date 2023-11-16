<script setup>
import { ref } from 'vue'
const htmlContent = ref('<p><b>Refrensi Sebuah HTML</b> ref ini bisa di binding kedalam HTML</p>')
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
<div>Cara 1: {{ htmlContent }}</div> 
<div v-html="htmlContent"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
