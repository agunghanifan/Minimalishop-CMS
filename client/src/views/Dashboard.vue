<template>
  <div>
    <Navbar></Navbar>
    <div>
      <div class="mt-5">
        <h1>Welcome</h1>
      </div>
        <div class="mt-5">
        <Table />
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
  }
}
</script>

<style scoped>

</style>
