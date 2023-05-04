import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MulaiView from '../views/MulaiView.vue'
import LayoutOne from '../layouts/LayoutOne'

const routes = [
  {
    path: '/',
    component: LayoutOne,
    children:
    [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      
    ]
  },
    {
      path: '/mv',
      name: '2ndpage',
      component: MulaiView
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
