<template>
  <tr class="align-self-center" style="color: white;">
    <td class="text-center">{{productFromTable.name}}</td>
    <td class="text-center"><img :src="productFromTable.image_url" class="rounded mx-auto d-block" alt="product"></td>
    <td class="text-center">{{productFromTable.Category.name}}</td>
    <td class="text-center">{{changesToIdr}}</td>
    <td class="text-center">{{productFromTable.stock}}</td>
    <td class="text-center"><button @click.prevent="addAmountProduct(productFromTable.id)" class="btn btn-info">+</button> <button @click.prevent="reduceAmountProduct(productFromTable.id)" class="btn btn-success">-</button> <button @click.prevent="editProduct(productFromTable.id)" class="btn btn-warning">Edit</button> <button @click.prevent="deleteProduct(productFromTable.id)" class="btn btn-danger">Delete</button> </td>
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
    },
    addAmountProduct (id) {
      this.$store.dispatch('addAmountData', id)
      const timing = setInterval(() => {
        this.$store.dispatch('fetchDataVuex')
        clearInterval(timing)
      }, 500)
    },
    reduceAmountProduct (id) {
      this.$store.dispatch('reduceAmountData', id)
      const timing = setInterval(() => {
        this.$store.dispatch('fetchDataVuex')
        clearInterval(timing)
      }, 500)
    }
  },
  computed: {
    changesToIdr: function () {
      const convert = new Intl.NumberFormat('id-RP', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(this.productFromTable.price)
      return convert
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
