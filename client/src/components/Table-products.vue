<template>
  <div class="container">
    <table class="table table-striped table-hover">
      <thead class="table-light">
        <tr>
          <th scope="col" class="text-center">Name</th>
          <th scope="col" class="text-center">Image</th>
          <th scope="col" class="text-center">Category</th>
          <th scope="col" class="text-center">Price</th>
          <th scope="col" class="text-center">Stock</th>
          <th scope="col" class="text-center">Actions</th>
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

<style scoped>
</style>
