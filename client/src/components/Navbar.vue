<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/dashboard">CMS Production</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/banner"
              >Get Banner<span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/addCategory"
              >Add Category<span class="sr-only">(current)</span></router-link
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button
            @click.prevent="logOut"
            class="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
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

<style scoped>
.navbar {
  background-color: #F5F5F5;
}
</style>
