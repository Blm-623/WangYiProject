import Vue from 'vue'
import VueRouter from 'vue-router'

// const home = () => import('../views/home/Home.vue')
const bought = () => import('../views/bought/Bought.vue')
const cart = () => import('../views/cart/Cart.vue')
const person = () => import('../views/person/Person.vue')
const sort = () => import('../views/sort/Sort.vue')
const sousuo = () => import('../components/Sousuo/Sousuo.vue')
Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect:'/sort'
    },
    {
      path:'/home',
      component:() => import('../views/home/Home.vue')
    },
    {
      path:'/bought',
      component:bought
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/person',
      component:person
    },
    {
      path:'/sort',
      component:sort
    },
    {
      path:'/sousuo',
      component:sousuo
    }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
