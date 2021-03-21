<template>
  <div>
    <Navbar></Navbar>
    <div>
      <div class="mt-5">
        <h1 class="text-center" style="color: white">Welcome to Production Control</h1>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-secondary mb-3" @click.prevent="toAddPages">Add Product</button>
      </div>
        <div class="">
        <Table class="overflow-auto" style="width: 100rem; height: 35vw"/>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Table from '../components/Table-products'

export default {
  components: {
    Navbar,
    Table
  },
  methods: {
    toAddPages () {
      this.$store.commit('toAddPage')
    }
  },
  created () {
  }
}
</script>

<style scoped>
</style>
