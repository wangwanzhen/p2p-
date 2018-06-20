<template>
	<div id="banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(item,index) in bannerData" :key="index">
				<img :src="dizhi+item.img_url" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>

export default {
	name:'Banner',
	data() {
      return {
        swiperOption: {
    			slidesPerView: 1,
    			spaceBetween: 30,
    			loop: true,
    			pagination: {
    				el: '.swiper-pagination',
    				clickable: true,
    			},
    			autoplay: {
    				delay: 3000,
    				stopOnLastSlide: false,
    				disableOnInteraction: false,
    			}
        },
        bannerData:[],
        dizhi:''
      }
    },
    props:{
      urlImg:{
        type:String,
        default:'/App/index/get_banners'
      }
    },
    computed: {

    },
    mounted () {
    	this.fetchData();
    },
    methods: {
    	fetchData () {
    		let _this = this;
    		this.$http({
    			method: 'post',
    			url:URLS+this.urlImg,
    			data: {
    			}
    		}).then(function(response) {
				_this.dizhi = 'http://'+response.data.data.dizhi;
				_this.bannerData = response.data.data.list;
			});
    	}
    }
}
</script>

<style scoped>
  #banner{margin-top: 1.8rem;}
	.swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-slide img{
    	display: block;
    	width:100%;
    }
</style>