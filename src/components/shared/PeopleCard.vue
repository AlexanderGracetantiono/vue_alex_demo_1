<script setup>
defineProps({
  username: String,
  imageUrl:String
})
</script>

<template>
 <div class="card-container">
    <img :src="imageUrl" style="width: 100px; height: auto;"/>
    <span class="title-case-style">{{ username }}</span>
 </div>
</template>

<style scoped>
 .card-container{
    display: flex;
    align-items: center;
}
.title-case-style{
  font-size: 18px;
  color: black;
  margin-left: 10px;
}
/* .card-container:hover{
  background-color: wheat;
    display: flex;
    align-items: center;
    padding: 10px 20px;
}  */
</style>
