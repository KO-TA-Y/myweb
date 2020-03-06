<template>
  <div id="smallAbout">
    <v-card
      class="mx-auto"
      max-width="380"
      outlined
    >
      <v-img
        :aspect-ratio="16/9"
        :src=imgSrc
      >
      </v-img>
      <v-divider></v-divider>
      <v-card-title class="font-weight-bold">{{title}}</v-card-title>
      <v-card-text class="text--primary">
        <div>{{description}}</div>
      </v-card-text>
      <v-card-subtitle class="pb-0 pt-2">{{date}}</v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          :to="link"
          outlined
        >
          発表報告記事
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name:'researchContent',
    data(){
      return{

      }
    },
    props:{
      imgSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      
    }
  }
</script>

<style scoped>

</style>