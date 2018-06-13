<template>
  <div class="home">
    <HeadMessage></HeadMessage>
    <BannerView></BannerView>
    <NewsList></NewsList>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeadMessage from './HeadMessage.vue'
import BannerView from './Banner.vue'
import NewsList from './List.vue'
import FooterView from './Nav.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    BannerView,
    NewsList,
    FooterView,
    HeadMessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/mixin';
</style>
