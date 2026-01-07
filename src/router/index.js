import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/pages/Login.vue'
import Users from '/src/pages/Users.vue'


const routes = [
  { path: '/login', component: Login },
  { path: '/users', component: Users },
  { path: '/', redirect: '/login' }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
