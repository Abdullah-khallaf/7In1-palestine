<!-- src/components/Sidebar.vue -->
<template>
    <div class="list-group">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="`/article/${index + 1}`"
        class="list-group-item list-group-item-action"
      >
        Article {{ index + 1 }}
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        links: [
          'https://aja.ws/5a8yvb',
          'https://aja.ws/my9wpi',
          'https://aja.ws/z339po',
          'https://aja.ws/nair6u',
          'https://aja.ws/dcivzr',
          'https://aja.ws/m6lajy',
          'https://aja.ws/bkz4dx',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .list-group {
    margin-top: 20px;
  }
  </style>
  