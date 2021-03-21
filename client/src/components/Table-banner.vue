<template>
  <div class="container">
    <table class="table table-striped table-hover">
      <thead>
        <tr class="align-self-center">
          <th scope="col" class="text-center">Title</th>
          <th scope="col" class="text-center">Status</th>
          <th scope="col" class="text-center">Image</th>
          <th scope="col" class="text-center">Category</th>
          <th scope="col" class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tbodyData v-for="(banner, id) in banners" :key="id" :bannerFromTable="banner"></tbodyData>
      </tbody>
    </table>
  </div>
</template>

<script>
import tbodyData from '../components/Table-banner-body'
import { mapState } from 'vuex'

export default {
  methods: {
    fetchData () {
      this.$store.dispatch('fetchDataBannerVuex')
    }
  },
  computed: {
    ...mapState([
      'banners'
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
th {
  color: white;
}
</style>
