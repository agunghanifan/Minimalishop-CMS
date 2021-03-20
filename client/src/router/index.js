import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login-admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Add-product.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit-product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    if (to.name !== 'Login') {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
  // } else if (localStorage.access_token) {
  //   if (to.name === 'Login') {
  //     next({ name: 'Dashboard' })
  //   } else {
  //     next()
  //   }
  // }
})

export default router
