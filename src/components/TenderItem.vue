<template>
	<div id="tender">
		<ul class="tzlists_ul">
			<li v-for="(item,index) in listData" :key="index">
			  <router-link tag="a" :to="'/tenderdetail/'+item.biao_index">
			    <div class="tz_list_div">
			      <div class="tz_left_status">
			        <p class="f_24 clr_9 tz_tittle">[{{item.biao_index}}] {{item.j_k_biaoti | LimitNumber(20)}}</p>
			        <span class="tz_status_red f_18 clr_f">{{item.status | filterStatus}}</span></div>
			      <div style="clear: both;"></div>
			      <div class="tz_left">
			        <p class="f_20 clr_9 lilv_tz f_tz_small">{{item.h_k_leixing==4?'天':'年'}}利率</p>
			        <div class="tz_left_num">
			          <span class="f_88 al_ct clr_ora">{{item.j_k_lilv | limitNum}}</span>
			          <span class="f_30 clr_ora">{{item.h_k_leixing==4?'‰':'%'}}</span>
			          <span style="font-size:0.6rem; color: #fc4a40;" v-if="item.is_no_toubiao_jianli==1 && item.jiangli_zhi>0">+{{item.jiangli_zhi}}%</span></div>
			      </div>
			      <div class="tz_right">
			        <div class="f_36 al_ct clr_ora tz_qian">
			          <span style="font-size: 0.7rem; color: #999;">总额</span>{{item.j_k_jine>10000?(item.j_k_jine/10000).toFixed(2):Math.round(item.j_k_jine)}}
			          <span class="f_24 clr_9 lilv_tz f_tz_small">{{item.j_k_jine>10000?'万元':'元'}}</span>
			        </div>
			        <p class="f_36 clr_9 tz_jiek tz_jieku tz_data f_tz_small">期限
			          <span class="tz_right_jk">{{item.j_k_qixian}}</span>
			          <span class="tz_right_dw clr_9">{{item.h_k_leixing| dateHint}}</span></p>
			      </div>
			      <div style="clear: both;"></div>
			      <div class="tz_jindut">
			        <span class="jindu_tiao" :style="{width:(Math.floor(Number(item.yijie_jine)+Number(item.jiebiao_jine))/Number(item.j_k_jine)*100)+'%'}"></span>
			        <span class="jindu_nimber">{{Math.floor((Number(item.yijie_jine)+Number(item.jiebiao_jine))/Number(item.j_k_jine)*100)}}%</span></div>
			      <div class="time_biao">发标时间
			        <span>{{item.add_time*1000 | normalTime(1)}}</span></div>
			      <div style="clear: both;"></div>
			    </div>
			    <div style="clear: both;"></div>
			  </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			listData:[],
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
    			url:URLS+'/App/index/index',
    			params: {
    				skip:_this.skip
    			}
    		}).then(function(response) {
    			console.log(response.data)
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

<style scopde lang="scss">
#tender{
	background:#f2f8f8;
}
.al_ct {
    text-align: center;
}

.f_88 {
    font-size:1.8rem;
}
.clr_ora {
    color: #fc4a40;
}
.clr_9 {
    color: #999;
}
.tzlists_ul li {
    background: white;
}
.tzlists_ul li {
    position: relative;
    padding: 0 1rem 0.5rem 1rem;
    margin-top: 0.5rem;
}
.tz_list_div {
    /* background: white; */
    /* padding-top: 1rem; */
    padding-top: 1rem;
    /* border-bottom: 1px solid #f1f1f1; */
}
.tz_left{
	width:8rem;
	float: left;
	margin:0.5rem;
	/*background: #f9f9f9;*/
	border-right:0.05rem solid #f1f1f1;
}
.tz_right{
	width: 7.35rem;
	float: left;
	/*background: pink;*/

	/*background: #f5f5f5;*/

}
.tz_list_div{
	/*background: white;*/
	/*padding-top:1rem;*/
	padding-top:1rem;
	/*border-bottom: 1px solid #f1f1f1;*/
}
.tz_left_status .tz_status_red{
	float: right;
	position: static;
}
.tz_left_status{
	position:relative;
	border-bottom: 1px solid #f1f1f1;
	padding-bottom: 2.3rem;
	margin-bottom: 0.5rem;
}
.tz_left_status span{
	display: inline-block;
	padding:0.1rem ;
	border-width:1px;
	margin-right: 0.1rem;
}
/*.tz_left_status .tz_status_red{
	padding-left:0.2rem;
	padding-right:0.2rem;
	border:1px solid transparent;
	border-bottom:0;
	position: absolute;
	top:0.03rem;
	right:0;
}*/
.tz_left_status .tz_status_red{
	padding:0.2rem 0.8rem;
	border:1px solid #fc4a40;
	background: #fff;
	color: #fc4a40;
	font-size: 0.6rem;
}
.tz_left_num{
	text-align:left;
	/*margin:0.5rem 0;*/
	height: 2rem;
	line-height: 2rem;
	margin-bottom:0;
}
.f_20{
	text-align: left;
}
.f_24{
	font-size:0.8rem;
}
.tz_right_jk{
	color:#333;
	font-size:0.9rem;
	margin-left: 0.2rem;
}
.tz_right_dw{
	// color:;
}
.tz_right p{
	white-space: nowrap;
	text-overflow: ellipsis;
}
.tz_jiek{
	/*margin-top:0.9rem;*/
	/*margin-bottom:0.4rem;*/
	margin:0.5rem 0;
	margin-bottom:0;
	height: 2rem;
	line-height: 2rem;
}
.tz_jieku{
	margin:0;
	/*height: 2rem;
	line-height: 2rem;
	vertical-align: middle;*/
	line-height: 0;
	line-height:1.5rem;
}
.tzlists_ul li{
	background:white;
}
.tzlists_wraper{
	background: #f5f5f5;
}
.percent_wrap{

}
.lilv_tz{
	 color: #b8b8b8
}
.fixed_ul li  p{
	text-align:center;
}
.tz_qian{
	/*text-align:left;*/
	/*margin:0.5rem 0;*/
	margin-bottom:0;
	display: inline-block;
	float: left;
	// padding-left: 1rem;
	padding-top:0.8rem;
}
.tz_data{
	float: left;
	// padding-left: 1rem;
}
.zt_butn{
	padding:0rem 1rem;
	display: inline-block;
	border-radius: 0.05rem;
	/*background:#fe8d53;*/
	/*background:#6fd02a;*/
	background:#00b9c6;
	height: 1.5rem;
	line-height: 1.5rem;
	color:white;
	float: right;
	font-size:0.8rem;
}
.zt_butn_c{
	background:#d9d9d9;
}
.tz_btn{
	margin-top: 1rem;
}
.percent{
	width:13.8rem;
}
.percent_wrap p{
	float: right;
}
.f_tz_small{
	font-size:0.7rem;
	text-align: left;
}
.tz_tittle{
	color:#666;
	float: left;
}
.img_detail{
	width:100%;
	margin-bottom:0.5rem;
	border:1px solid #f1f1f1;
	padding-bottom:2rem;
	padding-top:1rem;
	background:white;
}
.img_detail ul{
	width:14rem;
	margin:0 auto;
}
.img_detail ul li{
	position: relative;
	border-radius:50%;
	width:3rem;
	height:3rem;
	background:no-repeat center center;
	float: left;
	background-size:2.0rem;
}
.img_detail ul li span{
	position: absolute;
	bottom:-1.5rem;
	width:3rem;
	display: inline-block;
	text-align: center;
	color:#666;
	z-index: 99;
}
.img_detail ul li:nth-child(1){
	// background-image: url(../images/safe_tz.png);
	background-color:  #FF6B6B;
}
.img_detail ul li:nth-child(2){
	// background-image: url(../images/jiangzhang_tz.png) ;
	background-color:#23DE99;
	margin-left:2.5rem;
}
.img_detail ul li:nth-child(3){
	// background-image: url(../images/shouyi_tz.png);
	background-color: #FDD100;
	margin-right:0;
	float: right;
}
.tz_jindut{
    width:85%;
    height:2px;
    background:#f0f0f0;
    position: relative;
    margin-top: 0.5rem;
}
.tz_jindut span{
    position: absolute;
    display: inline-block;
}
.jindu_tiao{
    background: #fc4a40;
    height: 2px;
    width: 0;
}
.jindu_nimber{
    color:#ccc;
    font-size: 0.6rem;
    top:-0.5rem;
    right:-19%;
    line-height: 1rem;
}
.time_biao{
    font-size: 0.6rem;
    height: 1rem;
    line-height: 1rem;
    color: #b8b8b8;
    margin-top: 0.4rem;
    padding-left: 0.5rem;
    position: relative;
}
.time_biao span{
    position: absolute;
    left:10rem;
}
</style>