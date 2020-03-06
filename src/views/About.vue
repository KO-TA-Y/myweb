<template>
  <div class="about">
    <v-sheet
      color="grey lighten-4"
      tile
      class="pt-8"
      :min-height="this.$store.state.height"
      :width="this.$store.state.width"
    >
      <largeAbout v-if="this.$store.state.showBar"></largeAbout>
      <smallAbout v-if="!this.$store.state.showBar"></smallAbout>
    </v-sheet>
  </div>
</template>
<script>
import largeAbout from '../components/largeAbout.vue'
import smallAbout from '../components/smallAbout.vue'
export default {
  name:'About',
  components:{
    largeAbout,
    smallAbout,

  },
}
</script>
