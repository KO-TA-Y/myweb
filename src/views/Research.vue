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
      <!-- <v-item-group class="mx-12">
        <v-container>
          <v-row>
            <v-col
              v-for="n in 9"
              :key="n"
              class="mx-auto d-flex child-flex"
              cols="4"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : ''"
                  class="d-flex align-center"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      Active
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group> -->
      <v-container max-width=1200>
          <v-row class="mx-auto">
            <v-col
              v-for="content in contents"
              :key="content.title"
              class="mr-auto child-flex"
              :cols="researchCols"
            >
            <researchContent :imgSrc="content.imgSrc" :title="content.title" :date="content.date" :description="content.desc" :link="content.link"></researchContent>
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
      contents:[
        {
          imgSrc:'https://firebasestorage.googleapis.com/v0/b/myfirstfirebase-626b2.appspot.com/o/noican.jpg?alt=media&token=d67b98ba-243a-4f90-bf63-fd1fe469f82b',
          title:'ノイズキャンセリングミュージック：音楽の印象誘導による騒音の不快度軽減効果の検証',
          date:'2019-07-22',
          desc:'こちらは騒音に対して適切な音楽を提示することで、騒音の不快度を軽減できるという傾向を明らかにした研究です。',
          link:'http://nkmr-lab.org/news/sighci184_noican_yokoyama.html'
        }
      ]
    }
  },
  updated() {
    this.researchCols=this.$store.state.researchCols
  },

}
</script>