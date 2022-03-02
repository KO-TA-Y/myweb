<template>
  <div id="smallAbout">
    <div class="">
      <v-list min-width=320 max-width=500 :width="this.$store.state.width" class="mx-auto" color="grey lighten-4">
        <v-list-item  class="pl-12">
          <v-card-title class="display-1 pl-0 ml-0" v-if="this.$store.state.showBar">About</v-card-title>
          <v-card-title class="headline pl-0 ml-0 pt-0" v-if="!this.$store.state.showBar">About</v-card-title>
        </v-list-item>
        <v-divider class="mx-5"></v-divider>
        <v-img src="https://firebasestorage.googleapis.com/v0/b/myfirstfirebase-626b2.appspot.com/o/photo.jpg?alt=media&token=5ddf4852-bad2-41dd-aefb-d85b627a3038" class="mx-auto mt-4" contain min-height=200 :height=this.$store.state.width*0.3 aspect-ratio="1"></v-img>          
        <v-list-item-content min-width=800 class="pl-8">
          <table class="pt-2 pb-12 mx-auto" >
            <tr>
              <td style="border-bottom: dashed 1px silver;"><strong>Name</strong></td>
              <td style="border-bottom: dashed 1px silver;" class="pl-3">横山 幸大 ( Kota Yokoyama )</td>
            </tr>
            <tr>
              <td class="pb-1"><strong>Affiliarion</strong></td>
              <td class="pb-1 pl-3">明治大学大学院 先端数理科学研究科</td>
            </tr>
            <tr>
              <td style="border-bottom: dashed 1px silver;" class="pt-1"></td>
              <td style="border-bottom: dashed 1px silver;" class="pt-1 pl-3">先端メディアサイエンス専攻 修士1年</td>
            </tr>
            <tr>
              <td class="pb-0"><strong>Likes</strong></td>
              <td class="pb-0 pl-3"><li>ギター</li></td>
            </tr>
            <tr>
              <td class="py-1"></td>
              <td class="py-1 pl-3"><li>柴犬</li></td>
            </tr>
            <tr>
              <td style="border-bottom: dashed 1px silver;" class="pt-0"></td>
              <td style="border-bottom: dashed 1px silver;" class="pt-0 pl-3"><li>YouTube</li></td>
            </tr>
            <tr>
              <td class="pb-0"><strong>Skills</strong></td>
              <td class="pb-0 pl-3"><li>JavaScript</li></td>
            </tr>
            <tr>
              <td class="py-1"></td>
              <td class="py-1 pl-3"><li>Vue.js</li></td>
            </tr>
            <tr>
              <td class="py-0"></td>
              <td class="py-0 pl-3"><li>Python</li></td>
            </tr>
            <tr>
              <td class="py-1"></td>
              <td class="py-1 pl-3"><li>HTML</li></td>
            </tr>
            <tr>
              <td class="py-0"></td>
              <td class="py-0 pl-3"><li>Processing</li></td>
            </tr>
          </table>    
        </v-list-item-content>
      </v-list>
    </div>
  </div>
</template>

<script>
  export default {
    name:'smallAbout',
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
/* 最小フォントサイズ : 16px */
table {
  font-size: 14px;
}

/* 最大フォントサイズ : 幅 1280px 以上は 24px */
@media (min-width: 600px) {
  table {
    font-size: 18px;
  }
}

</style>