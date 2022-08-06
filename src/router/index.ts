import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('@/views/LandingPage/LandingPage.vue'),
  },
  {
    path: '/form/:formKey',
    name: 'Form',
    component: () => import('@/views/Form/Form.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
