<template>
	<div id="list">
		<div class="style">
		<router-link class="finds_news" :to="'/details/'+item.content_id" v-for="(item,index) in listData" :key="index">
			<div class="we-account-qit">
				<span class="tilte_span">{{item.title| LimitNumber(20)}}</span>
				<span>{{item.time*1000 | normalTime()}}</span>
			</div>
			<div class="finds_img">
				<img :src="dizhi+item.image" alt="" v-if="item.image">
				<img src="../assets/images/img_1.jpg" alt="" v-else>
			</div>
		</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name:'list',
	data () {
		return {
			listData:[],
        	dizhi:'',
            REQUIRE:true,
            skip:1
		}
	},
    created () {
    	this.fetchData();
    },
    mounted () {
        // 添加滚动事件，检测滚动到页面底部
        window.addEventListener('scroll', this.scrollBottom)
    },
    methods: {
    	fetchData () {
    		let _this = this;
    		this.$http({
    			method: 'get',
    			url:URLS+'/App/message/news',
    			params: {
    				skip:_this.skip,
    				index_id:6
    			}
    		}).then(function(response) {
    			// console.log(response.data)
				_this.dizhi = 'http://'+response.data.data.dizhi;
                if (response.data.data.list) {
                    var arr = _this.listData
                    _this.listData = arr.concat(response.data.data.list);
                    _this.REQUIRE = true;
                };
			});
    	},
        scrollBottom() {

            // console.log("top:"+scrollTop+",doc:"+scrollHeight+",client:"+clientHeight); 
            // 滚动到页面底部时，请求前一天的文章内容
            if (((window.screen.height + document.documentElement.scrollTop) > (document.body.clientHeight)) && this.REQUIRE) {
              // 请求的数据未加载完成时，滚动到底部不再请求数据
                this.REQUIRE = false;
                this.skip ++;
                this.fetchData()
            }
        }
    }
}
</script>

<style scoped>
.style {
    background-color: #fff;
    width: 16.75rem;
    margin: auto;
}
.finds_news {
    display: block;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eeefef;
}
.we-account-qit {
    width: 11rem;
    color: #494949;
    font-size: 0.7rem;
    float: left;
}
.we-account-qit .tilte_span {
    max-width: 10.5rem;
    /* font-size: 0.7rem; */
    color: #3e3a39;
    height: 2.8rem;
    line-height: 1.4rem;
}
.we-account-qit span {
    display: block;
    color: #b4b5b5;
}
.we-account-qit span {
    display: block;
    color: #b4b5b5;
}
.finds_img img {
    width: 5.7rem;
    height: 3.8rem;
}
</style>