<template>
  <div id="worksContent">
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
        <!-- <div :class="{'descHidden' : !overlay, 'desc' : overlay}">{{description}}</div> -->
        <div class="descHidden">{{description}}</div>
      </v-card-text>
      <v-card-subtitle class="pb-0 pt-2">{{date}}</v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          outlined
          @click="goToLink"
        >
          詳細
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-overlay :value="overlay" class="pa-auto ma-auto">
      <div class="video">
        <iframe :width="this.$store.state.width*0.8" :height="this.$store.state.width*0.8*9/16" src="https://www.youtube.com/embed/et1aYxEfTrM?autoplay=1" frameborder="0"></iframe>
      </div>
      <v-btn
        icon
        @click="overlay = false"
        class="hide"
      >
      <v-icon x-large>mdi-close</v-icon>
      </v-btn>
    </v-overlay> -->
  </div>
</template>

<script>
  export default {
    name:'worksContent',
    data(){
      return{
        overlay:false,
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
      }
    },
    methods: {
      goToLink(){
        this.$router.push(`works/${this.link}`)
      }
    },
  }
</script>

<style scoped>
.video{
  position:relative;
  width:100%;
  padding-top:0%;
}
.video iframe{
  position:relative;
  top:0%;
  left:50%;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  -moz-transform: translate(-50%, 0%);
  min-width:192px;
  max-width:960px;
  min-height:108px;
  max-height:540px;
}
.card{
  max-width: 1000px;
  max-height:500px;
}
.hide{
  position: absolute;
  top:-10%;
  right:-10%;
}
.descHidden{
  max-height: 3.2em;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  line-height: 1.6;
}
.desc{
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height:20em;
}
</style>