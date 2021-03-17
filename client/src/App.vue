<template>
  <div id="app">
    <Navbar v-if="isTokenHere === true"></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  data () {
    return {
      isTokenHere: false
    }
  },
  methods: {
    verivyToken () {
      if (localStorage.getItem('access_token')) {
        this.isTokenHere = true
        this.$router.push('/home')
      } else {
        this.isTokenHere = false
        this.$router.push('/')
      }
    }
  },
  components: {
    Navbar
  },
  created () {
    this.verivyToken()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
