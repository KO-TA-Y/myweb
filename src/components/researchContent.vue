<template>
  <div id="researchContent">
    <v-card
      class="mx-auto"
      max-width="380"
      outlined
      :width="this.$store.state.width*0.8"
    >
      <v-img
        :aspect-ratio="16/9"
        :src=imgSrc
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-divider></v-divider>
      <v-card-title class="subtitle-1 font-weight-bold">{{title}}</v-card-title>
      <v-card-text class="text--primary">
        <div>{{description}}</div>
      </v-card-text>
      <v-card-subtitle class="pb-0 pt-2">{{date}}</v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          :href="link"
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