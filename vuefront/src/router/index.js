import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/HistoryView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/resgister',
  
    component: () => import('../views/RegisterView.vue')
  },

  {
    path: '/signup',
    component: () => import('../components/SignupComp.vue')
  },

  {
    path: '/admin',
    name: 'admin',
    component:()=> import('../views/AdminView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component:()=> import('../views/UsersView.vue')
  },
  {
    path: '/product/:prodID',
    name: 'prodSingView',
    component:()=> import('../views/SingleProduct.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component:()=> import('../views/CartView.vue')
  }
  
]






const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
