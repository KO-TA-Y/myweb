<template>
  <div id="largeAbout">
    <v-card class="mx-auto" max-width=1000 color="grey lighten-5">
      <div class="d-flex">
        <v-list min-width=700 :width="this.$store.state.width" class="ml-0" color="grey lighten-4">
          <v-list-item  class="pl-12">
            <v-list-item-content>
              <v-card-title class="display-1 ml-auto pa-0" style="width:30px;">About</v-card-title>
            </v-list-item-content>
            <v-list-item-content>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mx-5"></v-divider>
          <v-list-item class="py-7">
            <v-img src="../assets/photo.jpeg" contain height=300 aspect-ratio="1"></v-img>          
            <v-list-item-content min-width=800 class="pl-7">
              
              <!-- <v-list class="justify-center" max-width=800 dense >
                <v-list-item class="">
                  <v-list-item-subtitle class="pl-3">Name</v-list-item-subtitle>
                  <v-list-item-subtitle >横山 幸大</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle class="pl-3">Likes</v-list-item-subtitle>
                  <v-list-item-subtitle>ギター、柴犬、YouTube</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle class="pl-3">Affiliation</v-list-item-subtitle>
                  <v-list-item-subtitle >明治大学総合数理学部<br>先端メディアサイエンス学科</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle class="pl-3">Name</v-list-item-subtitle>
                  <v-list-item-subtitle>横山 幸大 (Kota Yokoyama)</v-list-item-subtitle>
                </v-list-item>
              </v-list> -->
              <table class="pt-6">
                <tr>
                  <td style="border-bottom: dashed 1px silver;"><strong>Name</strong></td>
                  <td style="border-bottom: dashed 1px silver;">横山 幸大</td>
                </tr>
                <tr>
                  <td class="pb-1"><strong>Affiliarion</strong></td>
                  <td class="pb-1">明治大学 総合数理学部</td>
                </tr>
                <tr>
                  <td style="border-bottom: dashed 1px silver;" class="pt-1"></td>
                  <td style="border-bottom: dashed 1px silver;" class="pt-1">先端メディアサイエンス学科 4年</td>
                </tr>
                <tr>
                  <td class="pb-0"><strong>Likes</strong></td>
                  <td class="pb-0"><li>ギター</li></td>
                </tr>
                <tr>
                  <td class="py-1"></td>
                  <td class="py-1"><li>柴犬</li></td>
                </tr>
                <tr>
                  <td style="border-bottom: dashed 1px silver;" class="pt-0"></td>
                  <td style="border-bottom: dashed 1px silver;" class="pt-0"><li>YouTube</li></td>
                </tr>
                <tr>
                  <td class="pb-0"><strong>Skills</strong></td>
                  <td class="pb-0"><li>Processing</li></td>
                </tr>
                <tr>
                  <td class="py-1"></td>
                  <td class="py-1"><li>HTML</li></td>
                </tr>
                <tr>
                  <td class="py-0"></td>
                  <td class="py-0"><li>Javascript</li></td>
                </tr>
                <tr>
                  <td class="py-1"></td>
                  <td class="py-1"><li>Vue.js</li></td>
                </tr>
              </table>
              
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name:'largeAbout',
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
.prof_img{
  width:20%;
}
table td{
  padding: 20px 0 20px 0;
  
}
</style>