<template>
	<div id="latestInformation">
		<div class="latest-information">
		    <div class="trumpet"><img src="../assets/images/icon1.png"> <span>最新消息</span></div>
		    <div id="div1" class="information">
		        <swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide v-for="(item,index) in listData" :key="index">
						<a href="">{{item.title}}</a>
						<span>{{item.time*1000 | normalTime(1)}}</span>
					</swiper-slide>
				</swiper>
		    </div>
		    <div class="more-message"><a href="/inw/expose/news" class="">更多</a></div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			swiperOption: {
				direction:'vertical',
    			slidesPerView: 1,
    			spaceBetween: 30,
    			loop: true,
    			autoplay: {
    				delay: 3000,
    				stopOnLastSlide: false,
    				disableOnInteraction: false,
    			}
        	},
        	listData:[],
        	dizhi:''
		}
	},
	props:{
      urlImg:{
        type:String,
        default:'/App/message/news'
      }
    },
    mounted () {
    	this.fetchData();
    },
    methods: {
    	fetchData () {
    		let _this = this;
    		this.$http({
    			method: 'get',
    			url:URLS+this.urlImg,
    			params: {
    				skip:1,
    				index_id:6
    			}
    		}).then(function(response) {
    			console.log(response)
				_this.dizhi = 'http://'+response.data.data.dizhi;
				_this.listData = response.data.data.list;
			});
    	}
    }
}
</script>

<style>
.latest-information {
    width: 1100px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto
}

.latest-information div {
    float: left
}

.latest-information .trumpet {
    margin-right: 50px;
    cursor: default
}

.latest-information .trumpet img {
    vertical-align: middle;
    margin-right: 14px
}

.latest-information .information {
    width: 800px;
    height: 50px;
    overflow: hidden
}

.latest-information .information div {
    width: 900px;
    transition: All .4s ease-in-out;
    height: 100%;
}

.latest-information .information div a {
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 98px;
    padding-left: 10px;
    color: #666;
}

.latest-information .information div a:hover {
    color: #dab866
}

.latest-information .information div span {
    color: #333
}

.latest-information .more-message {
    padding-right: 10px;
    float: right;
}

.latest-information .more-message:hover {
}

.latest-information .more-message:hover a {
    color: #666
}

.latest-information .more-message a {
    color: #999
}

</style>
