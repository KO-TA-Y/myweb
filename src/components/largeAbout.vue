<template>
  <div id="largeAbout">
    <div class="d-flex">
      <v-list min-width=700 max-width=900 :width="this.$store.state.width" class="mx-auto" color="grey lighten-4">
        <v-list-item  class="pl-12">
          <v-card-title class="display-1 pl-0 ml-0">About</v-card-title>
        </v-list-item>
        <v-divider class="mx-5"></v-divider>
        <v-list-item class="py-7">
          <v-img src="https://firebasestorage.googleapis.com/v0/b/myfirstfirebase-626b2.appspot.com/o/photo.jpg?alt=media&token=5ddf4852-bad2-41dd-aefb-d85b627a3038" contain height=300 aspect-ratio="1"></v-img>          
          <v-list-item-content min-width=800 class="pl-7">
            <table class="pt-6">
              <tr>
                <td style="border-bottom: dashed 1px silver;"><strong>Name</strong></td>
                <td style="border-bottom: dashed 1px silver;">横山 幸大 ( Kota Yokoyama )</td>
              </tr>
              <tr>
                <td class="pb-1"><strong>Affiliarion</strong></td>
                <td class="pb-1">明治大学大学院 先端数理科学研究科</td>
              </tr>
              <tr>
                <td style="border-bottom: dashed 1px silver;" class="pt-1"></td>
                <td style="border-bottom: dashed 1px silver;" class="pt-1">先端メディアサイエンス専攻 修士1年</td>
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
                <td class="pb-0"><li>JavaScript</li></td>
              </tr>
              <tr>
                <td class="py-1"></td>
                <td class="py-1"><li>Vue.js</li></td>
              </tr>
              <tr>
                <td class="py-0"></td>
                <td class="py-0"><li>Python</li></td>
              </tr>
              <tr>
                <td class="py-1"></td>
                <td class="py-1"><li>HTML</li></td>
              </tr>
              <tr>
                <td class="py-0"></td>
                <td class="py-0"><li>Processing</li></td>
              </tr>
            </table>      
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
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
  font-size: 18px;
}
</style>