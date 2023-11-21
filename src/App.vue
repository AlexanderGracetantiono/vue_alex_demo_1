<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DanielPhotoComponent from './components/DanielPhoto.vue'
import ContohAttributeBindingComponent from './components/ContohAttrBinding.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'
import HeaderComponent from './components/shared/Header.vue'
import FooterComponent from './components/shared/Footer.vue'

</script>
<template>
  <ReloadPrompt/>
  <HeaderComponent/>
  <HelloWorld msg="Lorem Impsum Si Dolor Admet" />
  <DanielPhotoComponent msg="HTML V2" 
  imageUrl="https://th.bing.com/th/id/OIP.domCFfMKnJYT-bC4BX4adQHaE7?pid=ImgDet&w=2048&h=1365&rs=1" />
  <ContohAttributeBindingComponent msg="Contoh Cara binding HTML"/>
  <FooterComponent/>
</template>

<style scoped>
/* .logo {
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
} */
</style>
