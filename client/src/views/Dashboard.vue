<template>
  <div>
    <Navbar></Navbar>
    <div>
      <div class="mt-5">
        <h1>Welcome</h1>
      </div>
        <div class="mt-5">
        <Table class="overflow-auto" style="width: 100rem; height: 30vw"/>
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
  created () {
  }
}
</script>

<style scoped>
</style>
