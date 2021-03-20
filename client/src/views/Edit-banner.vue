<template>
  <div>
    <Navbar/>
    <router-view :key="$route.fullPath"></router-view>
    <div class="container mt-5">
      <h1>Edit Banner</h1>
    </div>
    <div class="container">
      <div v-if="findErrors.length > 0">
        <div v-for="(error, id) in findErrors" :key="id" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
      </div>
      <form @submit.prevent="editBanner">
        <div class="mb-3">
          <label for="title" class="form-label">Banner's Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="titleHelp" placeholder="Type your banner's title" v-model="title">
          <div id="titleHelp" class="form-text">Create new Banner</div>
        </div>
        <div class="mb-3">
          <label for="status" class="form-label">Status</label>
          <select name="status" v-model="status">
            <option :selected="status" value="available" >Available</option>
            <option :selected="status" value="pending" >Pending</option>
            <option :selected="status" value="expired" >Expired</option>
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
            <option :selected="CategoryId || category.id" :value="category.id" id="cars" v-for="(category, id) in categories" :key="id">{{category.name}}</option>
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
      idEdited: 0,
      title: '',
      image_url: '',
      status: '',
      CategoryId: 0
    }
  },
  computed: {
    ...mapState(['displayEditBanner', 'categories', 'findErrors', 'banners'])
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategoriesVuex')
    },
    showToPage () {
      this.idEdited = +this.displayEditBanner.id
      this.title = this.displayEditBanner.title
      this.image_url = this.displayEditBanner.image_url
      this.status = this.displayEditBanner.status
      this.CategoryId = +this.displayEditBanner.CategoryId
    },
    editBanner () {
      const data = {
        id: this.idEdited,
        title: this.title,
        image_url: this.image_url,
        status: this.status,
        CategoryId: this.CategoryId
      }
      this.$store.dispatch('editBannerSubmit', data)
      const timing = setInterval(() => {
        this.isFetchNeeded()
        clearInterval(timing)
      }, 500)
    },
    isFetchNeeded () {
      if (this.findErrors) {
        this.showToPage()
      }
    },
    isParamsRoutesRight () {
      let routesFound = false
      this.banners.forEach((banner) => {
        if (banner.id === +this.$route.params.id) {
          routesFound = true
        }
      })
      if (!routesFound) {
        this.$router.push('/404-not-found')
      }
    }
  },
  created () {
    this.fetchCategories()
    this.showToPage()
    this.isParamsRoutesRight()
  },
  components: {
    Navbar
  }
}
</script>

<style>
</style>
