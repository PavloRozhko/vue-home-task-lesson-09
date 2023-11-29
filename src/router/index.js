import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ShopPage from '@/views/ShopPage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import PaymentInfo from '@/views/PaymentInfo.vue'
import ContactsPage from '@/views/ContactsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage,
  },
  {
    path: '/shop/:categoryId',
    name: 'products',
    component: ProductsPage,
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentInfo,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
