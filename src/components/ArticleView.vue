<template>
    <div class="article-container">
      <div v-if="loading" class="loading">Loading article...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else v-html="articleContent" class="article-content"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        articleContent: '',
        loading: true,
        error: null,
      };
    },
    computed: {
      articleUrl() {
        const id = this.$route.params.id;
        const urls = [
          'https://aja.ws/5a8yvb',
          'https://aja.ws/my9wpi',
          'https://aja.ws/z339po',
          'https://aja.ws/nair6u',
          'https://aja.ws/dcivzr',
          'https://aja.ws/m6lajy',
          'https://aja.ws/bkz4dx',
        ];
        return `https://cors-anywhere.herokuapp.com/${urls[id - 1]}`;
      },
    },
    methods: {
      async fetchArticleContent() {
        try {
          const response = await axios.get(this.articleUrl);
          this.articleContent = response.data;
        } catch (error) {
          this.error = "Failed to load the article due to CORS restrictions or other issues.";
        } finally {
          this.loading = false;
        }
      },
    },
    watch: {
      articleUrl: 'fetchArticleContent',
    },
    mounted() {
      this.fetchArticleContent();
    },
  };
  </script>
  
  <style scoped>
  .article-container {
    margin-top: 20px;
  }
  
  .loading {
    text-align: center;
  }
  
  .error {
    color: red;
    text-align: center;
  }
  
  .article-content {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  </style>
  