<template>
    <div id="scrollButton" @click="$vuetify.goTo(target, options)">
        <v-icon x-large dark>mdi-chevron-down</v-icon>
    </div>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
export default {
    name:'scrollButton',
    props:{
        height:null,
    },
    data () {
      return {
        type: 'number',
        number: 9999,
        selector: '#scroll-with-options',
        selected: 'Button',
        elements: ['Button', 'Radio group'],
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
      }
    },
    computed: {
      target () {
        const value = this[this.type]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
        }
      }
    },
    methods: {
        
    },

}
</script>
<style scoped>
.scrollButton{
    
}
</style>