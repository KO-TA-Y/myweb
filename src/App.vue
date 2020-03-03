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
      >
        <span class="mr-2">ABOUT</span>
        <v-icon>mdi-account-details</v-icon>
  
      </v-btn>
      <v-btn
        text
        to="/product"
      >
        <span class="mr-2">PRODUCT</span>
        <v-icon>mdi-star-outline</v-icon>
      </v-btn>
      <v-btn
        text
        to="/research"
      >
        <span class="mr-2">RESEARCH</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>
      <v-btn
        text
        to="/blog"
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

  data: () => ({
    //
  }),
};
</script>
