<template>
  <div>
    <h2>Home</h2>
    <transactions></transactions>
    <edit-transaction></edit-transaction>
  </div>
</template>

<script>
import Transactions from './Transactions.vue'
import EditTransaction from './EditTransaction.vue'

export default {
  components: {
    Transactions,
    EditTransaction
  }
}
</script>

<style scoped>

</style>
