<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
  },
  created () {
  }
}
</script>

<style>
body {
  background-color: #34568B;
}

#app {
  font-family: 'Vollkorn', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
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
