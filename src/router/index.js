import { createRouter, createWebHistory } from 'vue-router';
import PDFViewer from '@/components/PDFViewer.vue';

const routes = [
  {
    path: '/',
    redirect: '/article/1', // Redirect to the first article on initial load
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: PDFViewer,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
