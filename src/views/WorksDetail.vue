<template>
  <div id="worksDetail" class="grey lighten-4 pt-8">
    <div class="">
      <v-list min-width=320 max-width=800 :width="this.$store.state.width" :min-height="this.$store.state.height" class="mx-auto" color="grey lighten-4">
        <v-list-item  class="pl-12">
          <v-card-title class="display-1 pl-0 ml-0" v-if="this.$store.state.showBar">{{contents[this.$route.params.index].title}}</v-card-title>
          <v-card-title class="headline pl-0 ml-0 pt-0" v-if="!this.$store.state.showBar">{{contents[this.$route.params.index].title}}</v-card-title>
        </v-list-item>
        <v-divider class="mx-5"></v-divider>
        <v-img
          :aspect-ratio="16/9"
          :src=contents[this.$route.params.index].imgSrc
          class="mt-3 mx-auto"
          max-width=700
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
        <v-list-item-content min-width=800 class="px-12">
          <div class="pt-8 desc" v-html="contents[this.$route.params.index].desc"></div>
        </v-list-item-content>
      </v-list>
    </div>
  </div>
</template>

<script>
import contents from '../assets/data/works'
  export default {
    name:'smallAbout',
    data(){
      return{
        contents:contents,
      }
    },
  }
</script>

<style scoped>
.prof_img{
  width:20%;
}
/* 最小フォントサイズ : 16px */
.desc {
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing:0.07em;

}

/* 最大フォントサイズ : 幅 600px 以上は 20px */
@media (min-width: 600px) {
  .desc {
    font-size: 18px;
  }
}

/* 最大フォントサイズ : 幅 1280px 以上は 24px */
@media (min-width: 1280px) {
  .desc {
    font-size: 20px;
  }
}


</style>