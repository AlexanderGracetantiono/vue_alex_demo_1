<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
<div>
  <p> Kamu tau gak sih, bahwa Daniel sangat suka makan nasi merah?</p>
</div>
  <div class="card">
    <button type="button" @click="count++">Vote Count {{ count }}</button>
    <p>
      VOTE Seberapa sayang kamu dengan Daniel
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
