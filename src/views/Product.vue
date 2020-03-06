<template>
  <div class="product">
    <v-sheet
      color="grey lighten-4"
      tile
      class="pt-8"
      :min-height="this.$store.state.height"
      :width="this.$store.state.width"
    >
      <productContent/>
    </v-sheet>
  </div>
</template>

<script>
import productContent from '../components/productContent.vue'
export default {
  components:{
    productContent,
  }
}
</script>
