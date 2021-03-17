import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)
const baseUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
  },
  mutations: {
    insAccessToken (payload) {
      localStorage.setItem('access_token', payload)
      router.go()
    },
    logOut () {
      localStorage.removeItem('access_token')
      router.go()
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
        .then(res => {
          context.commit('insAccessToken', res.data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
