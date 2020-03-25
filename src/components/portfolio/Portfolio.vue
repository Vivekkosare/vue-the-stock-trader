<template>
  <div class="col-xs-12">
    <app-stock v-for="stock in stocks" :stock="stock">{{stock}}</app-stock>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import Stock from '../portfolio/Stock';
export default {
  computed:{
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components:{
      appStock: Stock
  }
}
</script>
