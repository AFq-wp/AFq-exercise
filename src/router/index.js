import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Notfound from '../views/404/index.vue'
const routes = [
  {
    path: '/login',
    component: ()=> import('../views/login/index.vue')
    
  },
  {
    path: '/',
    component: ()=> import('../views/home/index.vue')
    
  },
  {
    path: '/404',
    name: 'NoPage404',
    component: Notfound,
    hidden: true
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    hidden: true
  }

  // {
  //   path: '/',
  //   component: () => import('../views/Home.vue')
  // },
  // {
  //   path: '/demo',
  //   component: () => import('../views/Demo.vue')
  // },
  // {
  //   path: '/film',
  //   component: () => import('../views/Film.vue')
  // }
];


const router = createRouter({
  history: createWebHashHistory(),  // hash路由模式
  // history: createWebHistory(),  // history路由模式
  routes
});

export default router;