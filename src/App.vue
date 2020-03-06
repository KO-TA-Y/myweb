<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey lighten-1"
      dark
      height="56"
    >
      <v-toolbar-title>
        <router-link to="/" style="text-decoration:none;"><v-icon x-large>mdi-home</v-icon></router-link>
      </v-toolbar-title>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
      </div>

      <v-spacer></v-spacer>
      
      <v-btn
        text
        to="/about"
        v-if="this.$store.state.showBar"
        x-large
      >
        <span class="mr-2">ABOUT</span>
        <v-icon>mdi-account-details</v-icon>
  
      </v-btn>
      <v-btn
        text
        to="/product"
        v-if="this.$store.state.showBar"
        x-large
      >
        <span class="mr-2">PRODUCT</span>
        <v-icon>mdi-star-outline</v-icon>
      </v-btn>
      <v-btn
        text
        to="/research"
        v-if="this.$store.state.showBar"
        x-large
      >
        <span class="mr-2">RESEARCH</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>
      <v-btn
        text
        to="/blog"
        v-if="this.$store.state.showBar"
        x-large
      >
        <span class="mr-2">BLOG</span>
        <v-icon>mdi-newspaper-variant-outline</v-icon>
      </v-btn>
      
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      class="font-regular overline"
      color="blue-grey lighten-4"
      :width="this.$store.state.width"
    >
      <v-col
        class="text-center"
        cols="12"
      >
      <v-btn text fab href="https://twitter.com/kohta1208"><v-icon color="grey darken-1" large class="mx-2">mdi-twitter</v-icon></v-btn>
      <v-btn text fab href="https://www.instagram.com/yoko_hata_leo/"><v-icon color="grey darken-1" large class="mx-2">mdi-instagram</v-icon></v-btn>
      <v-btn text fab href="https://github.com/KO-TA-Y"><v-icon color="grey darken-1" large class="mx-2">mdi-github-circle</v-icon></v-btn>
      </v-col>
      <v-col
        class="text-center"
        cols="12"
      >
        ©️{{ new Date().getFullYear() }} - Kota Yokoyama
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
    }
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.$store.state.width = window.innerWidth;
      this.$store.state.height = window.innerHeight-56;
      if(this.$store.state.width<=750){
        this.$store.state.showBar=false
      }else{
        this.$store.state.showBar=true
      }
    },
    
  },
  created() {
    if(this.$store.state.width<=750){
        this.$store.state.showBar=false
      }else{
        this.$store.state.showBar=true
      }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }

};
</script>
