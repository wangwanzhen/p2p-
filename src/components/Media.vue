<template>
  <div class="home">
    <HeadMessage></HeadMessage>
    <MediaList></MediaList>
    <FooterView></FooterView>
  </div>
</template>

<script>
import MediaList from './ListM.vue'
import FooterView from './Nav.vue'
import HeadMessage from './HeadMessage.vue'


export default {
  name: 'meida',
  data () {
    return {
    }
  },
  components: {
    MediaList,
    FooterView,
    HeadMessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/mixin';
.home{
    margin-top: 1.8rem;
}
</style>
