<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey lighten-1"
      dark
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
        v-if="showBar"
      >
        <span class="mr-2">ABOUT</span>
        <v-icon>mdi-account-details</v-icon>
  
      </v-btn>
      <v-btn
        text
        to="/product"
        v-if="showBar"
      >
        <span class="mr-2">PRODUCT</span>
        <v-icon>mdi-star-outline</v-icon>
      </v-btn>
      <v-btn
        text
        to="/research"
        v-if="showBar"
      >
        <span class="mr-2">RESEARCH</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>
      <v-btn
        text
        to="/blog"
        v-if="showBar"
      >
        <span class="mr-2">BLOG</span>
        <v-icon>mdi-newspaper-variant-outline</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      showBar:true,
      showNav:false,
    }
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.$store.state.width = window.innerWidth;
      this.$store.state.height = window.innerHeight;
      if(this.$store.state.width<=750){
        this.showBar=false
      }else{
        this.showBar=true
      }
      this.showNav= !this.showBar
    },
    
  },
  created() {
    if(this.$store.state.width<=750){
        this.showBar=false
      }else{
        this.showBar=true
      }
      this.showNav= !this.showBar
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }

};
</script>
