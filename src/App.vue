<template>
  <h1>
    طوفان الأقصى والتدين ... يقظة إسلامية جديدة؟
  </h1>

  <div class="app-container">
    <!-- Sidebar for Articles -->
    <aside class="sidebar">
      <ul class="list-group">
        <li 
          v-for="article in articles" 
          :key="article.id" 
          class="list-group-item"
          :class="{ active: isActive(article.id) }"
        >
          <router-link 
            class="link"
            :to="{ name: 'Article', params: { id: article.id } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Router View for dynamically loading articles -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        { id: 1, title: '1- من معذبي الأرض إلى أحباب الله', pdfPath: '/public/Articles/1-من معذبي الأرض إلى أحباب الله.pdf' },
        { id: 2, title: '2- الحروب الثقافية والحرب على غزة', pdfPath: '/public/Articles/2-الحروب الثقافية والحرب على غزة.pdf' },
        { id: 3, title: '3- الطوفان والنبوءة والساعة', pdfPath: '/public/Articles/3-الطوفان والنبوءة والساعة.pdf' },
        { id: 4, title: '4- الصهيونية الدينية على تيك توك', pdfPath: '/public/Articles/4-الصهيونية الدينية على تيك توك.pdf' },
        { id: 5, title: '5- ما الإيمان؟ عن غزة وصلاة الاستسقاء', pdfPath: '/public/Articles/5-ما الإيمان عن غزة وصلاة الاستسقاء.pdf' },
        { id: 6, title: '6- سيكولوجية التدين، البنية التحتية للمقاومة', pdfPath: '/public/Articles/6-سيكولوجية التدين.pdf' },
        { id: 7, title: '7- إسلام إنجيلي أمريكي', pdfPath: '/public/Articles/7-إسلام إنجيلي أمريكي.pdf' },
      ],
    };
  },
  methods: {
    isActive(articleId) {
      return this.$route.params.id === String(articleId);
    },
  },
};
</script>

<style>
h1{
  font-family: "cairo", "sans-serif";
  text-align: center;
  margin-bottom: 20px;
}
.app-container {
  display: flex;
  direction: rtl;
  width: 100%;  
  font-family: "cairo", "sans-serif";
}

.sidebar {
  width: 20%;
  background-color: #f4f4f4;
  padding: 10px;
  height: 100vh;
  position: fixed;
  top:0;
  left:80%;
}
li{
  cursor: pointer;
}
li:nth-child(even){
  background-color: #f4f4f4;
}
.link{
  text-decoration: none;
  color: black;
} 
</style>
