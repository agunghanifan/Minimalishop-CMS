<template>
  <div>
    <Navbar/>
    <div class="container mt-5">
      <h1>Add new Banner</h1>
    </div>
    <div v-if="findErrors.length > 0">
      <div v-for="(error, id) in findErrors" :key="id" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
    <div class="container">
      <form @submit.prevent="addNewBanner">
        <div class="mb-3">
          <label for="name" class="form-label">Banner's Name</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Type your banner's title" v-model="title">
          <div id="nameHelp" class="form-text">Create new Banner</div>
        </div>
        <div class="mb-3">
          <label for="status" class="form-label">Status</label>
          <select name="status" v-model="status">
            <option :selected="status" value="available" id="status">Available</option>
            <option value="pending" id="status">Pending</option>
            <option value="expired" id="status">Expired</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="image_url" class="form-label">Image URL</label>
          <input type="url" class="form-control" id="image_url" aria-describedby="nameHelp" placeholder="Drop your link banner's here" v-model="image_url">
          <div id="nameHelp" class="form-text">Post your image</div>
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Category</label>
          <select name="category" v-model="CategoryId">
            <option :selected="category.id" :value="category.id" id="cars" v-for="(category, id) in categories" :key="id">{{category.name}}</option>
          </select>
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
      title: '',
      status: 'available',
      image_url: '',
      CategoryId: 1
    }
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategoriesVuex')
    },
    addNewBanner () {
      const data = {
        title: this.title,
        status: this.status,
        image_url: this.image_url,
        CategoryId: this.CategoryId
      }
      this.$store.dispatch('addBanner', data)
    }
  },
  computed: {
    ...mapState([
      'categories', 'findErrors'
    ])
  },
  components: {
    Navbar
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style>

</style>
