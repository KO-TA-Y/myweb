<template>
  <div class="home">
    <div v-if="!showMobileImg">
      <v-img
        src="../assets/potsun.jpg"
        :height="this.$store.state.height"
        position="top"
      >
      <div class="name">KOTA YOKOYAMA</div>
      <div class="buttons">
          <v-btn 
          text
          to="/about"
          block
          outlined
          v-if="!this.$store.state.showBar"
          large
          dark
          >
            <span class="ma-2">ABOUT</span>
          </v-btn>
          <v-btn 
          text
          to="/works"
          block
          outlined
          v-if="!this.$store.state.showBar"
          large
          dark
          >
            <span class="ma-2">WORKS</span>
          </v-btn>
          <v-btn 
          text
          to="/research"
          block
          outlined
          v-if="!this.$store.state.showBar"
          large
          dark
          >
            <span class="ma-2">RESEARCH</span>
          </v-btn>
          <v-btn 
          text
          to="/blog"
          block
          outlined
          v-if="!this.$store.state.showBar"
          large
          dark
          >
            <span class="ma-2">BLOG</span>
          </v-btn>
        </div>
      </v-img>
    </div>
    <div v-if="showMobileImg">
      <v-img
        src="../assets/potsun.jpg"
        :height="mobileHeight"
        v-once
        position="top"
      >
        <div class="name">KOTA YOKOYAMA</div>
        
        <div class="buttons">
          <v-btn 
          text
          to="/about"
          block
          outlined
          large
          dark
          >
            <span class="ma-2">ABOUT</span>
          </v-btn>
          <v-btn 
          text
          to="/works"
          block
          outlined
          large
          dark
          >
            <span class="ma-2">WORKS</span>
          </v-btn>
          <v-btn 
          text
          to="/research"
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
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
    showMobileImg:null,
    mobileHeight:window.innerHeight-56,
    }
  },
  created() {
    var ua = navigator.userAgent
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
      this.showMobileImg=true
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
      this.showMobileImg=true
    }else{
      this.showMobileImg=false
    }
  },

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
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  -moz-transform: translate(-50%, 0%);
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