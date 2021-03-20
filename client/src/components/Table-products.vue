<template>
  <div class="container">
    <table class="table table-light">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tbodyData v-for="(product, id) in products" :key="id" :productFromTable="product"></tbodyData>
      </tbody>
    </table>
  </div>
</template>

<script>
import tbodyData from '../components/Table-products-body'
import { mapState } from 'vuex'

export default {
  methods: {
    fetchData () {
      this.$store.dispatch('fetchDataVuex')
    }
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  components: {
    tbodyData
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
</style>
