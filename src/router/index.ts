import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('@/views/LandingPage.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
