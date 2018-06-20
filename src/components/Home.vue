<template>
	<div class="home">
		<HeadView :Back="back">
			<span slot="name">稀之分期</span>
		</HeadView>
		<BannerView :urlImg="url"></BannerView>
		<TenderView :number="5"></TenderView>
	</div>
</template>

<script>
import BannerView from './Banner.vue'
import HeadView from './Head.vue'
import TenderView from './TenderItem.vue'
export default {
	data () {
		return {
			url:'/App/index/get_banners',
			back:false
		}
	},
	components: {
		BannerView,
		HeadView,
		TenderView
	}
}
</script>

<style scoped lang="scss">
.home {
	#banner{
		margin-top: 2rem;
	}
}
</style>