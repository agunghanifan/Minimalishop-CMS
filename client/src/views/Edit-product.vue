<template>
  <div>
    <Navbar/>
    <div class="container mt-5">
      <h1>Edit Product</h1>
    </div>
    <div class="container">
      <form @submit.prevent="editProductSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Name's Product</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Type your product's name" v-model="name">
          <div id="nameHelp" class="form-text">Name of your product</div>
        </div>
        <div class="mb-3">
          <label for="imageurl" class="form-label">Image URL of the Product's</label>
          <input type="text" class="form-control" id="imageurl" aria-describedby="imageHelp" placeholder="Drop your link image in here" v-model="image_url">
          <div id="imageHelp" class="form-text">Make sure that link you put on the box is active</div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" id="price" aria-describedby="priceHelp" placeholder="Type your product's price" v-model="price">
          <div id="priceHelp" class="form-text">Price product only in numbers</div>
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <input type="number" class="form-control" id="stock" aria-describedby="stockHelp" placeholder="Type your product's stock" v-model="stock">
          <div id="stockHelp" class="form-text">Price product only in numbers</div>
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
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
      CategoryId: 0
    }
  },
  computed: {
    ...mapState(['displayDataEdit', 'categories'])
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategoriesVuex')
    },
    showToPage () {
      this.idEdited = +this.displayDataEdit.id
      this.name = this.displayDataEdit.name
      this.image_url = this.displayDataEdit.image_url
      this.price = +this.displayDataEdit.price
      this.stock = +this.displayDataEdit.stock
      this.CategoryId = +this.displayDataEdit.CategoryId
    },
    editProductSubmit () {
      const data = {
        id: this.idEdited,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        CategoryId: this.CategoryId
      }
      // console.log(data)
      this.$store.dispatch('editDataSubmit', data)
    }
  },
  created () {
    this.fetchCategories()
    this.showToPage()
  },
  components: {
    Navbar
  }
}
</script>

<style>
</style>
