<script setup>
defineProps({
  username: String,
  imageUrl:String
})
</script>

<template>
 <div>
    <img :src="imageUrl" style="width: 200px; height: auto; margin:10px"/>
    <span>{{ username }}</span>
 </div>
</template>

<style scoped>
</style>
