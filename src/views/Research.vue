<template>
  <div id="research" class="grey lighten-4">
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
          <v-card-title class="display-1 pl-0 ml-0">Research</v-card-title>
        </v-list-item>
        <v-divider class="mx-5"></v-divider>
      </v-list>
      <v-list v-if="!this.$store.state.showBar" min-width=320 max-width=500 :width="this.$store.state.width" class="mx-auto" color="grey lighten-4">
        <v-list-item  class="pl-12">
          <v-card-title class="headline pl-0 ml-0 pt-0" >Research</v-card-title>
        </v-list-item>
        <v-divider class="mx-5"></v-divider>
      </v-list>
      <v-container max-width=1200>
          <v-row class="mx-auto">
            <v-col
              v-for="content in this.$store.state.research"
              :key="content.title"
              class="mr-auto child-flex"
              :cols="researchCols"
            >
            <researchContent :imgSrc="content.imgSrc" :title="content.title" :date="content.date" :description="content.description" :link="content.link"></researchContent>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import researchContent from '../components/researchContent.vue'
export default {
  name:'research',
  components:{
    researchContent,
  },
  data(){
    return{
      researchCols:this.$store.state.researchCols,
    }
  },
  created() {
    this.$axios.get('https://yokoyama.nkmr.io/api/get_research.php',{
    }).then((response)=>{
      this.$store.commit('setResearch',{research:response.data})
    }).catch((error)=>{
      alert('エラーが発生しました')
      console.log('err:',error)
    })
  },
  updated() {
    this.researchCols=this.$store.state.researchCols
  },

}
</script>