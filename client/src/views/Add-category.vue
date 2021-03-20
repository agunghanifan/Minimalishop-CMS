<template>
  <div>
    <Navbar/>
    <div class="container mt-5">
      <h1>Add new Category</h1>
    </div>
    <div v-if="findErrors.length > 0">
      <div class="alert alert-danger" role="alert">
        {{ findErrors }}
      </div>
    </div>
    <div class="container">
      <form @submit.prevent="addNewCategory">
        <div class="mb-3">
          <label for="name" class="form-label">Name's Category</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Type your category's name" v-model="nameCategory">
          <div id="nameHelp" class="form-text">Create new Category</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      nameCategory: ''
    }
  },
  methods: {
    addNewCategory () {
      const data = {
        name: this.nameCategory
      }
      this.$store.dispatch('addCategory', data)
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapState(['findErrors'])
  }
}
</script>

<style>

</style>
