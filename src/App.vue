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
      <v-icon @click="drawer = !drawer" v-if="!this.$store.state.showBar" x-large>{{ drawer ? 'mdi-close' : 'mdi-hamburger'}}</v-icon>
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
        to="/works"
        v-if="this.$store.state.showBar"
        x-large
      >
        <span class="mr-2">WORKS</span>
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
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      class="pt-12 mt-1"
      style="position:fixed;"
    >
    
      <v-list
        dense
      >
        <v-list-item-group
          active-class="blue-grey--text text--darken-1"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            class="py-1"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content transition="slide-x-transition">
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
      <v-btn text fab href="https://github.com/KO-TA-Y"><v-icon color="grey darken-1" large class="mx-2">mdi-github</v-icon></v-btn>
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
      items:[
        {
          title:'ABOUT',
          icon:'mdi-account-details',
          link:'/about'
        },
        {
          title:'WORKS',
          icon:'mdi-star-outline',
          link:'/works'
        },
        {
          title:'RESEARCH',
          icon:'mdi-chart-bar',
          link:'/research'
        },
        {
          title:'BLOG',
          icon:'mdi-newspaper-variant-outline',
          link:'/blog'
        },
      ],
      drawer:false,
    }
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.$store.state.width = window.innerWidth;
      this.$store.state.height = window.innerHeight-56;
      if(this.$store.state.width<=800){
        this.$store.state.showBar=false
        this.$store.state.researchCols=12
      }else{
        this.$store.state.showBar=true
        this.$store.state.researchCols=6
      }
    },
    
  },
  created() {
    this.$store.state.width = window.innerWidth;
    this.$store.state.height = window.innerHeight-56;
    if(this.$store.state.width<=800){
        this.$store.state.showBar=false
        this.$store.state.researchCols=12
      }else{
        this.$store.state.showBar=true
        this.$store.state.researchCols=6
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
