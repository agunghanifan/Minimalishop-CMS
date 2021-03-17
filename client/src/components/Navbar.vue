<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button type="submit" class="btn btn-primary" @click.prevent="logOut">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut () {
      this.$store.commit('logOut')
    }
  }
}
</script>

<style>

</style>
