<template>
  <div class="research grey lighten-4">
    <v-sheet
      color="grey lighten-4 mx-auto"
      tile
      class="pt-8"
      max-width=900
      :min-height="this.$store.state.height"
      :width="this.$store.state.width"
    >
      <v-list v-if="this.$store.state.showBar" min-width=700 max-width=900 :width="this.$store.state.width" class="mx-auto" color="grey lighten-4">
        <v-list-item  class="pl-12">
          <v-card-title class="display-1 pl-0 ml-0">Works</v-card-title>
        </v-list-item>
        <v-divider class="mx-5"></v-divider>
      </v-list>
      <v-list v-if="!this.$store.state.showBar" min-width=320 max-width=500 :width="this.$store.state.width" class="mx-auto" color="grey lighten-4">
        <v-list-item  class="pl-12">
          <v-card-title class="headline pl-0 ml-0 pt-0" >Works</v-card-title>
        </v-list-item>
        <v-divider class="mx-5"></v-divider>
      </v-list>
      <v-container max-width=1200>
          <v-row class="mx-auto">
            <v-col
              v-for="content in contents"
              :key="content.title"
              class="mr-auto child-flex"
              :cols="researchCols"
            >
            <worksContent :imgSrc="content.imgSrc" :title="content.title" :date="content.date" :description="content.descShort" :link="content.index"></worksContent>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import worksContent from '../components/worksContent.vue'
import contents from '../assets/data/works'
export default {
  name:'works',
  components:{
    worksContent,
  },
  data(){
    return{
      researchCols:this.$store.state.researchCols,
      contents:contents,
    }
  },
  updated() {
    this.researchCols=this.$store.state.researchCols
  },

}
</script>
