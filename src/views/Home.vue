<template>
  <div class="home">
    <v-img
      src="../assets/potsun.jpg"
      :height="this.$store.state.height"
      class="grey darken-4"
      transition="fade-transition"
      position="top"
    >
      <v-row class="lightbox white--text pa-2 fill-height">
        <v-col>
          <div class="name">Kota Yokoyama</div>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{

    }
  },
  methods: {
    
  }

}
</script>

<style scoped>
.name{
  position:absolute; 
  top:37%;
  left:50%;
  width:100%;
  text-align: center;
  font-size:9vw; 
  font-family: 'Quicksand', sans-serif;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
}

</style>