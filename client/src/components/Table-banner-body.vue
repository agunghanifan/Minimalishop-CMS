<template>
  <tr class="">
    <td class="text-center">{{bannerFromTable.title}}</td>
    <td class="text-center">{{bannerFromTable.status}}</td>
    <td class="text-center"><img :src="bannerFromTable.image_url" class="rounded mx-auto d-block" alt="banner"></td>
    <td class="text-center">{{bannerFromTable.Category.name}}</td>
    <td class="text-center"><button @click.prevent="editBanner(bannerFromTable.id)" class="btn btn-warning">Edit</button> <button @click.prevent="deleteBanner(bannerFromTable.id)" class="btn btn-danger">Delete</button> </td>
  </tr>
</template>

<script>
export default {
  methods: {
    editBanner (id) {
      // console.log(id)
      this.$store.dispatch('editDataBanner', id)
    },
    deleteBanner (id) {
      console.log(id)
      this.$store.dispatch('deleteDataBanner', id)
      const timing = setInterval(() => {
        this.$store.dispatch('fetchDataBannerVuex')
        clearInterval(timing)
      }, 3000)
    }
  },
  props: [
    'bannerFromTable'
  ]
}
</script>

<style scoped>
img {
  width: 500px;
  height: 200px;
}
</style>
