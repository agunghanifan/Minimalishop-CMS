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
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit-product.vue')
  },
  {
    path: '/addCategory',
    name: 'AddCategory',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add-category.vue')
  },
  {
    path: '/banner',
    name: 'Banner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Banner.vue')
  },
  {
    path: '/addBanner',
    name: 'addBanner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add-banner.vue')
  },
  {
    path: '/editBanner/:id',
    name: 'EditBanner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit-banner.vue')
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notfound.vue')
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
})

export default router
