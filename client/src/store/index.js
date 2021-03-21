import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)
// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://cms-ecommerce-agungs.herokuapp.com'

export default new Vuex.Store({
  state: {
    access_token: '',
    products: [],
    categories: [],
    displayDataEdit: [],
    banners: [],
    displayEditBanner: [],
    findErrors: [],
    reFetch: false
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
    },
    toAddPage (state, payload) {
      router.push('/addProduct')
    },
    fetchDatabanner (state, payload) {
      state.banners = payload
    },
    toAddBannerPage (state, payload) {
      router.push('/addBanner')
    },
    showEditBanner (state, payload) {
      state.displayEditBanner = payload
      router.push(`/editBanner/${payload.id}`)
    },
    showErrors (state, payload) {
      state.findErrors = payload
      const timing = setInterval(() => {
        state.findErrors = []
        clearInterval(timing)
      }, 3000)
    },
    refetchProductEdit (state, payload) {
      state.reFetch = true
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
        .catch((err) => {
          context.commit('showErrors', err.response.data.message)
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
          context.commit('showErrors', err.response.data.message)
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
          context.commit('showErrors', err.response.data.message)
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
          context.commit('showErrors', err.response.data.message)
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
          context.commit('showErrors', err.response.data.message)
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
          context.commit('refetchProductEdit')
          context.commit('showErrors', err.response.data.message)
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
          context.commit('showErrors', err.response.data.message)
        })
    },
    addCategory (context, payload) {
      axios({
        url: baseUrl + '/addCategory',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name
        }
      })
        .then((res) => {
          router.push('/dashboard')
        })
        .catch(err => {
          context.commit('showErrors', err.response.data.message)
        })
    },
    fetchDataBannerVuex (context, payload) {
      axios({
        url: baseUrl + '/banners',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fetchDatabanner', data)
        })
        .catch(err => {
          context.commit('showErrors', err.response.data.message)
        })
    },
    addBanner (context, payload) {
      axios({
        url: baseUrl + '/addBanner',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url,
          CategoryId: payload.CategoryId
        }
      })
        .then(({ data }) => {
          router.push('/banner')
        })
        .catch((err) => {
          context.commit('showErrors', err.response.data.message)
        })
    },
    editDataBanner (context, payload) {
      axios({
        url: baseUrl + `/banner/${payload}`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('showEditBanner', data)
        })
        .catch((err) => {
          context.commit('showErrors', err.response.data.message)
        })
    },
    editBannerSubmit (context, payload) {
      axios({
        url: baseUrl + `/banner/${payload.id}`,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          id: payload.id,
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status,
          CategoryId: payload.CategoryId
        }
      })
        .then(({ data }) => {
          router.push('/banner')
        })
        .catch((err) => {
          context.commit('showErrors', err.response.data.message)
        })
    },
    deleteDataBanner (context, payload) {
      axios({
        url: baseUrl + `/banner/${payload}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
        })
        .catch((err) => {
          context.commit('showErrors', err.response.data.message)
        })
    },
    addAmountData (context, payload) {
      axios({
        url: baseUrl + `/product/${payload}/plus`,
        method: 'patch',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
        })
        .catch((err) => {
          console.log(err)
        })
    },
    reduceAmountData (context, payload) {
      axios({
        url: baseUrl + `/product/${payload}/minus`,
        method: 'patch',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
