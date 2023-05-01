import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
