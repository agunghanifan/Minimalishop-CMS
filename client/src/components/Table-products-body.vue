<template>
  <tr class="align-self-center">
    <td class="">{{productFromTable.name}}</td>
    <td class=""><img :src="productFromTable.image_url" class="rounded mx-auto d-block" alt="product"></td>
    <td class="">{{productFromTable.price}}</td>
    <td class="">{{productFromTable.stock}}</td>
    <td class="">{{productFromTable.Category.name}}</td>
    <td class=""><button @click.prevent="editProduct(productFromTable.id)" class="btn btn-warning">Edit</button> <button @click.prevent="deleteProduct(productFromTable.id)" class="btn btn-danger">Delete</button> </td>
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
      this.$store.dispatch('fetchDataVuex')
    }
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
