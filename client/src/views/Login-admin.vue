<template>
<section id="login">
    <div class="container-fluid d-flex" style="height: 100vh">
      <div class="d-flex align-items-center justify-content-center w-25 mx-auto mt-5">
        <div class="row" style="margin-top: 10px;">
          <div v-if="findErrors.length > 0" class="row align-self-center alert alert-danger" style="margin-left: 125px;" role="alert">
            {{ findErrors }}
          </div>
          <h1 class=" ml-4 mb-5 align-self-center" style="color: white;">Login to Ecommerce CMS</h1>
          <form @submit.prevent="login" class="col align-self-center">
            <div class="mb-3">
              <label for="email" class="form-label" style="color: white;">Email</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label" style="color: white;">Password</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-warning w-100" style="font-family: 'Poppins', sans-serif">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="container">
    <h1>Login Page</h1>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button @click.prevent="login" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data)
      this.email = ''
      this.password = ''
    }
  },
  computed: {
    ...mapState([
      'findErrors'
    ])
  },
  created () {
  }
}
</script>

<style>
body {
  font-family: 'Vollkorn', serif;
}
.container-fluid {
  position: relative;
}
</style>
