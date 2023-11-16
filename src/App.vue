<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DanielPhotoComponent from './components/DanielPhoto.vue'
import ContohAttributeBindingComponent from './components/ContohAttrBinding.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <HelloWorld msg="10 Fakta tentang Daniel" />
  <DanielPhotoComponent msg="Daniel sangat suka berteduh jika panas update V2" 
  imageUrl="https://th.bing.com/th/id/OIP.domCFfMKnJYT-bC4BX4adQHaE7?pid=ImgDet&w=2048&h=1365&rs=1" />
  <ContohAttributeBindingComponent msg="Contoh Cara binding HTML"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
