<template>
<div class="container">
  <h1>Buy & Sell Stocks</h1>
  <h5>You can load and save the data</h5>
  <h5>Funds: {{funds | currency}}</h5>
</div>
</template>
<script>
export default {
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  }
}
</script>
