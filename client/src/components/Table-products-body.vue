<template>
  <tr class="align-self-center">
    <td class="text-center">{{productFromTable.name}}</td>
    <td class="text-center"><img :src="productFromTable.image_url" class="rounded mx-auto d-block" alt="product"></td>
    <td class="text-center">{{productFromTable.price}}</td>
    <td class="text-center">{{productFromTable.stock}}</td>
    <td class="text-center">{{productFromTable.Category.name}}</td>
    <td class="text-center"><button @click.prevent="editProduct(productFromTable.id)" class="btn btn-warning">Edit</button> <button @click.prevent="deleteProduct(productFromTable.id)" class="btn btn-danger">Delete</button> </td>
  </tr>
</template>

<script>
export default {
  methods: {
    editProduct (id) {
      this.$store.dispatch('editData', id)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteData', id)
      const timing = setInterval(() => {
        this.$store.dispatch('fetchDataVuex')
        clearInterval(timing)
      }, 3000)
    }
  },
  computed: {
  },
  props: [
    'productFromTable'
  ]
}
</script>

<style>
img {
  width: 200px;
  height: 200px;
}
</style>
