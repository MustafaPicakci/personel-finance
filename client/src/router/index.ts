import { createRouter, createWebHistory } from 'vue-router'
import Budget from '../views/Budget.vue'
import Card from '../views/Card.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/budget', component: Budget },
  { path: '/card', component: Card },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
