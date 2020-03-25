<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock">{{stock}}</app-stock>
  </div>
</template>
<script>
import Stock from '../stocks/Stock'
export default {
  components: {
    appStock: Stock
  },
  computed:{
    stocks(){
      console.log(this.$store.getters.stocks);
      return this.$store.getters.stocks;
    }
  }
};
</script>
