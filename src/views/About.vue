<template>
  <div class="about">
    <v-sheet
      color="grey lighten-4"
      tile
      class="pt-8"
      :height="this.$store.state.height"
      :width="this.$store.state.width"
    >
      <largeAbout></largeAbout>
    </v-sheet>
  </div>
</template>
<script>
import largeAbout from '../components/largeAbout.vue'
export default {
  name:'About',
  components:{
    largeAbout,
  },
}
</script>
