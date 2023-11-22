<script setup>
import MainComponent from './components/MainComponent.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'
import HeaderComponent from './components/shared/Header.vue'
import FooterComponent from './components/shared/Footer.vue'

</script>
<template>
  <ReloadPrompt/>
  <HeaderComponent/>
  <MainComponent />
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
