// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
// import HomeComponent from '@/components/HomeComponent.vue';
// import IlustrationComponent from '@/components/IlustrationComponent.vue';
// import ProgramComponent from '@/components/ProgramComponent.vue';
// import IasComponent from '@/components/IasComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HomeComponent.vue'),
  },
  {
    path: '/ilustracion',
    name: 'Ilustration',
    component: () => import('@/components/IlustrationComponent.vue'),
  },
  {
    path: '/programacion',
    name: 'Program',
    component: () => import('@/components/ProgramComponent.vue'),
  },
  {
    path: '/ias',
    name: 'IAS',
    component: () => import('@/components/IasComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;