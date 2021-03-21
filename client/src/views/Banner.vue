<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="mt-5">
        <h1 class="text-center" style="color: white">Welcome to Banner's Controller</h1>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-secondary mb-3" @click.prevent="toAddBannerPages">Add Banner</button>
      </div>
        <div class="container-fluid">
        <Table class="overflow-auto" style="width: 5000px; height: 700px"/>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Table from '../components/Table-banner'

export default {
  components: {
    Navbar,
    Table
  },
  methods: {
    toAddBannerPages () {
      this.$store.commit('toAddBannerPage')
    }
  },
  created () {
  }
}
</script>

<style scoped>
</style>
