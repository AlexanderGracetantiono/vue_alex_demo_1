<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define reactive variables
const title = ref('Fetching Data Example');
const items = ref([]);

// Define a function to fetch data
// const fetchData = async () => {
//     try {
//       const response = await fetch('https://pokeapi.co/api/v2/pokemon');
//       if (response.ok) {
//         const data = await response.json();
//         items.value = data['results'];
//         console.log(data);
//       } else {
//         console.error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };
 
//   // Call fetchData when the component is mounted
//   onMounted(fetchData);

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/user');
    if (response.ok) {
      const data = await response.json();
      items.value = data;
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// Call fetchData when the component is mounted
onMounted(fetchData);
</script>