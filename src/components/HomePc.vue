<template>
	<div id="homePc">
		<HeadPc></HeadPc>
		<BannerView :urlImg="url"></BannerView>
		<LatestInform></LatestInform>
		<BidItem></BidItem>
	</div>
</template>

<script>
import HeadPc from './HeadPc.vue'
import BannerView from './Banner.vue'
import LatestInform from './LatestInform.vue'
import BidItem from './BidItem.vue'
export default {
	name:'homePc',
	data(){
		return {
			url:'/App/index/get_bannerss'
		}
	},
	components:{
		HeadPc,
		BannerView,
		LatestInform,
		BidItem
	}
}
</script>

<style >
body{
	background:#fafafa;
}
div#banner{
	margin-top:0px !important;
}
#homePc .swiper-pagination-bullet{
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0 12px;
    border: 2px solid #dab866;
    border-radius: 50%;
    cursor: pointer;
    background: unset;
    opacity:unset;
    box-sizing:border-box;
}
#homePc .swiper-pagination-bullet-active{
    width: 18px;
    height: 18px;
    margin-top: -2px;
    background-color: #dab866;
    opacity:unset;
}
</style>