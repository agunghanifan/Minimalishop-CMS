import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)
const baseUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    access_token: '',
    products: [],
    categories: [],
    displayDataEdit: []
  },
  mutations: {
    insAccessToken (state, payload) {
      localStorage.setItem('access_token', payload.access_token)
      router.push('/dashboard')
    },
    logOut () {
      localStorage.removeItem('access_token')
      router.push('/')
    },
    productsToMutations (state, payload) {
      state.products = payload
    },
    categoriesToMutations (state, payload) {
      state.categories = payload
    },
    showEditData (state, payload) {
      state.displayDataEdit = payload
      router.push(`/editProduct/${payload.id}`)
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: baseUrl + '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          context.commit('insAccessToken', { access_token: data.access_token })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchDataVuex (context) {
      axios({
        url: baseUrl + '/products',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('productsToMutations', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategoriesVuex (context) {
      axios({
        url: baseUrl + '/categories',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('categoriesToMutations', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        url: baseUrl + '/addproduct',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
        .then(() => {
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editData (context, payload) {
      axios({
        url: baseUrl + `/product/${payload}`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('showEditData', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editDataSubmit (context, payload) {
      axios({
        url: baseUrl + `/product/${payload.id}`,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock,
          CategoryId: +payload.CategoryId
        }
      })
        .then((res) => {
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteData (context, payload) {
      axios({
        url: baseUrl + `/product/${payload}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
