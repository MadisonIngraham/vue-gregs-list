import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  },
  {
    path: '*', //saftey net that returns bad routes back to the home
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
