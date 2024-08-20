<template>
    <div class="pdf-viewer-container">
      <iframe :src="pdfUrl" class="pdf-frame"></iframe>
      <button @click="downloadPDF" class="btn btn-primary mt-2">Download PDF</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'], // We get the article ID from the route parameter
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
    computed: {
      pdfUrl() {
        const article = this.articles.find(article => article.id == this.id);
        return article ? article.pdfPath : '';
      },
    },
    methods: {
      downloadPDF() {
        const link = document.createElement('a');
        link.href = this.pdfUrl;
        link.download = this.pdfUrl.split('/').pop();
        link.click();
      },
    },
  };
  </script>
  
  <style>
  .pdf-viewer-container{
    width: 80%;
    margin-right: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .pdf-frame {
    width: 98%;
    height: 85vh;
    border-radius: 10px;
    box-shadow: 0px 0px 30px 10px rgba(0,0,0,0.2);
  }
  .btn{
    text-align: center;
    width:200px;
  }
  </style>
  