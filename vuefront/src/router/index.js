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
    name: 'resgister',
  
    component: () => import('../views/LoginView.vue')
  },



  {
    path: '/admin',
    name: 'admin',
    component:()=> import('../views/AdminView.vue')
  },
  // {
  //   path: '/userAdmin',
  //   name: 'users',
  //   component:()=> import('../views/UsersView.vue')
  // },
  {
    path: '/UserAdmin',
    name: 'usersAdmin',
    component:()=> import('../views/UserAdmin.vue')
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
  },
  {
    path: '/profile',
    name: 'profile',
    component:()=> import('../views/ProfileView.vue')
  },
  {
    path: '/addProduct',
    name: 'addProductComp',
    component:()=> import('../components/AddProduct.vue')
  },
  {
    path: '/product/:id/edit',
    name: 'editProductComp',
    component:()=> import('../components/EditProducts.vue')
  },
  {
    path: '/addNewUser',
    name: 'addUserComp',
    component:()=> import('../components/RegisterComp.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component:()=> import('../views/LoginView.vue')
  },
  {
    path: '/productsView',
    name: 'prodView',
    component:()=> import('../views/ProductsView.vue')
  }

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
