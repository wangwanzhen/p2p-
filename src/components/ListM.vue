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
	name:'listmedia',
	data () {
		return {
			listData:[],
        	dizhi:''
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
    			url:URLS+'/App/message/news',
    			params: {
    				skip:1,
    				index_id:8
    			}
    		}).then(function(response) {
    			// console.log(response.data)
				_this.dizhi = 'http://'+response.data.data.dizhi;
				_this.listData = response.data.data.list;
			});
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