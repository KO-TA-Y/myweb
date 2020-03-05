<template>
  <div class="home">
    <v-img
      src="../assets/potsun.jpg"
      :height="this.$store.state.height"
      class="grey darken-4"
      transition="fade-transition"
      position="top"
    >
      <div class="name">KOTA YOKOYAMA</div>
      
      <div class="buttons">
        <v-btn 
        text
        to="/about"
        v-if=!this.$store.state.showBar
        block
        outlined
        large
        dark
        >
          <span class="ma-2">ABOUT</span>
        </v-btn>
        <v-btn 
        text
        to="/product"
        v-if=!this.$store.state.showBar
        block
        outlined
        large
        dark
        >
          <span class="ma-2">PRODUCT</span>
        </v-btn>
        <v-btn 
        text
        to="/research"
        v-if=!this.$store.state.showBar
        block
        outlined
        large
        dark
        >
          <span class="ma-2">RESEARCH</span>
        </v-btn>
        <v-btn 
        text
        to="/blog"
        v-if=!this.$store.state.showBar
        block
        outlined
        large
        dark
        >
          <span class="ma-2">BLOG</span>
        </v-btn>
      </div>
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
  color:white;
  top:40%;
  left:50%;
  width:95%;
  text-align: center;
  font-size:5.5vh;  	
  font-family: 'Economica', sans-serif;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
}
.buttons{
  position: absolute;
  bottom: 0%;
  width:100%;
  left:50%;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  -moz-transform: translate(-50%, 0%);
}
</style>