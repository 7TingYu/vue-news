import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('../views/List.vue')
    },{
      path: 'user',
      name: 'user',
      component: () => import('../views/User.vue')
    }]
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
