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
            <worksContent :imgSrc="content.imgSrc" :title="content.title" :date="content.date" :description="content.desc" :link="content.link"></worksContent>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import worksContent from '../components/worksContent.vue'
export default {
  name:'works',
  components:{
    worksContent,
  },
  data(){
    return{
      researchCols:this.$store.state.researchCols,
      contents:[
        {
          imgSrc:'https://firebasestorage.googleapis.com/v0/b/myfirstfirebase-626b2.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-03-06%2019.25.30.png?alt=media&token=ef675a04-c266-4eee-bb11-024c17776041',
          title:'ホームページ',
          date:'2020-03-XX',
          desc:'このサイトになります。Vue.jsのお勉強として作りました。',
          link:'/'
        },
        {
          imgSrc:'https://firebasestorage.googleapis.com/v0/b/myfirstfirebase-626b2.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-03-06%2020.06.48.png?alt=media&token=72b4d37e-16ab-4ca6-abf9-cab6ed1fce82',
          title:'SHAKE! SHAKE! (しゃけしゃけ)',
          date:'2019-01-16',
          desc:'会食する飲食店が決まらない時の意思決定を支援するものです。',//学部2年次の授業課題で作成したものです。
          link:'https://youtu.be/et1aYxEfTrM'
        },
        {
          imgSrc:'https://firebasestorage.googleapis.com/v0/b/myfirstfirebase-626b2.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-03-06%2020.43.02.png?alt=media&token=57985b16-c151-49a4-bae9-7bc1df0f5526',
          title:'GAKUHU KAKERU-N',
          date:'2017-06-07',
          desc:'ギターは弾けるけど楽譜が書けないという人のためにギターの指板画像から楽譜を書けるようにしました。',//学部1年次のゼミでApp Inventorを使った課題が出された時のものです。
          link:'/'
        },
        {
          imgSrc:'https://firebasestorage.googleapis.com/v0/b/myfirstfirebase-626b2.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-03-06%2020.31.04.png?alt=media&token=dfe8c8ef-75d0-48be-9f02-477344f291a3',
          title:'ヲタクのDVD鑑賞のためのAndroidアプリ',
          date:'2017-04-??',
          desc:'暗い部屋で、アイドルのDVDを鑑賞する時にスマホを推しの色のペンライト代わりにできるものです。',//学部1年次のゼミでApp Inventorを使った課題が出された時のものです。
          link:'https://www.youtube.com/watch?v=oJUk9uq_ZFs&feature=youtu.be'
        },
        
      ]
    }
  },
  updated() {
    this.researchCols=this.$store.state.researchCols
  },

}
</script>
