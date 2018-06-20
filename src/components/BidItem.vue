<template>
	<div id="tender" class="invest-info">
		<div class="hotspot_board">
		    <div class="board_icon clearfix">
		        <h3>热门专区 <span >优质项目 为您精选</span></h3>
		        <h3><a  href="/inw/invest/usualHot" class="">更多</a></h3></div>
		    <div class="content_box clearfix">
		        <a href="" class="" target="_blank" v-for="(item,index) in listData" :key="index" v-if='index<number'>
		            <div :class="['main_box','animate_h',index%2!=0?'margin_16':'']">
		                <p class="title"><span class="">[{{item.biao_index}}] {{item.j_k_biaoti | LimitNumber(20)}}</span> <br><span class="satatus">{{item.status | filterStatus}}</span></p>
		                <div class="data_box clearfix">
		                    <div class="rate_box">
		                        <p><span class="">{{item.j_k_lilv | limitNum}}</span> <span class="">{{item.h_k_leixing==4?'‰':'%'}}</span> <span class="award" v-if="item.is_no_toubiao_jianli==1 && item.jiangli_zhi>0"><span  class="award_rate">+{{item.jiangli_zhi}}%</span></span>
		                        </p> <span>预期{{item.h_k_leixing==4?'天':'年'}}利率</span></div>
		                    <div class="mounth_box">
		                        <p><span class="">1</span> <span class="">个月</span></p>
		                        <!----><span>借款期限</span></div>
		                    <div class="list_kinds">

		                    </div>
		                    <div class="list_kinds" style="display: none;">

		                    </div>
		                </div>
		                <div class="progress_box"><span class="line-wrap"><span  class="line" :style="{width:(Math.floor(Number(item.yijie_jine)+Number(item.jiebiao_jine))/Number(item.j_k_jine)*100)+'%'}"></span></span> <span class="special">{{Math.floor((Number(item.yijie_jine)+Number(item.jiebiao_jine))/Number(item.j_k_jine)*100)}}%</span></div>
		                <div class="full_type"><span style="display: none;">已投满</span> <span style="display: none;">还款中</span> <span style="display: none;">已还完</span></div>
		            </div>
		        </a>
		    </div>
		</div>
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
	props:{
		number:{
			type:Number,
			default:3
		}
	},
    created () {
    	this.fetchData();
    },
    mounted () {
    	if (this.number==5) {
	        // 添加滚动事件，检测滚动到页面底部
	        // window.addEventListener('scroll', this.scrollBottom)
    	};
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

<style scoped>
.invest-info{
    width: 1100px;
    margin: 0 auto;
}
.invest-info .assign_board .content_box .margin_16, .invest-info .hotspot_board .content_box .margin_16 {
    margin: 0 16px;
}
.invest-info .assign_board,.invest-info .hotspot_board,.invest-info .newly_board {
    margin-bottom: 40px
}
.invest-info .assign_board .board_icon,.invest-info .hotspot_board .board_icon,.invest-info .newly_board .board_icon {
    margin-right: 10px;
    text-align: center;
    color: #fff
}

.invest-info .assign_board .board_icon h3,.invest-info .hotspot_board .board_icon h3,.invest-info .newly_board .board_icon h3 {
    font-size: 20px;
    color: #333;
    float: left;
    height: 43px
}

.invest-info .assign_board .board_icon h3 a,.invest-info .assign_board .board_icon h3 span,.invest-info .hotspot_board .board_icon h3 a,.invest-info .hotspot_board .board_icon h3 span,.invest-info .newly_board .board_icon h3 a,.invest-info .newly_board .board_icon h3 span {
    color: #999;
    font-size: 14px
}

.invest-info .assign_board .board_icon h3 span,.invest-info .hotspot_board .board_icon h3 span,.invest-info .newly_board .board_icon h3 span {
    margin-left: 15px
}

.invest-info .assign_board .board_icon h3:first-of-type,.invest-info .hotspot_board .board_icon h3:first-of-type,.invest-info .newly_board .board_icon h3:first-of-type {
    text-align: left;
    width: 744px
}

.invest-info .assign_board .content_box,.invest-info .hotspot_board .content_box,.invest-info .newly_board .content_box {
    position: relative
}

.invest-info .assign_board .content_box .main_box,.invest-info .hotspot_board .content_box .main_box,.invest-info .newly_board .content_box .main_box {
    position: relative;
    width: 720px;
    float: left;
    background: #fff;
    padding: 20px 0 22px 23px
}

.invest-info .assign_board .content_box .main_box .title,.invest-info .hotspot_board .content_box .main_box .title,.invest-info .newly_board .content_box .main_box .title {
    color: #333;
    font-size: 16px
}

.invest-info .assign_board .content_box .main_box .title img,.invest-info .assign_board .content_box .main_box .title span,.invest-info .hotspot_board .content_box .main_box .title img,.invest-info .hotspot_board .content_box .main_box .title span,.invest-info .newly_board .content_box .main_box .title img,.invest-info .newly_board .content_box .main_box .title span {
    vertical-align: middle;
    margin-right: 7px
}

.invest-info .assign_board .content_box .main_box .data_box,.invest-info .hotspot_board .content_box .main_box .data_box,.invest-info .newly_board .content_box .main_box .data_box {
    padding-top: 24px
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box,.invest-info .assign_board .content_box .main_box .data_box .mounth_box,.invest-info .assign_board .content_box .main_box .data_box .rate_box,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box,.invest-info .newly_board .content_box .main_box .data_box .detail_box,.invest-info .newly_board .content_box .main_box .data_box .mounth_box,.invest-info .newly_board .content_box .main_box .data_box .rate_box {
    float: left
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box p,.invest-info .assign_board .content_box .main_box .data_box .mounth_box p,.invest-info .assign_board .content_box .main_box .data_box .rate_box p,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box p,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box p,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box p,.invest-info .newly_board .content_box .main_box .data_box .detail_box p,.invest-info .newly_board .content_box .main_box .data_box .mounth_box p,.invest-info .newly_board .content_box .main_box .data_box .rate_box p {
    margin-bottom: 10px;
    position: relative
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box p span,.invest-info .assign_board .content_box .main_box .data_box .mounth_box p span,.invest-info .assign_board .content_box .main_box .data_box .rate_box p span,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box p span,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box p span,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box p span,.invest-info .newly_board .content_box .main_box .data_box .detail_box p span,.invest-info .newly_board .content_box .main_box .data_box .mounth_box p span,.invest-info .newly_board .content_box .main_box .data_box .rate_box p span {
    color: #333
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box p .award,.invest-info .assign_board .content_box .main_box .data_box .mounth_box p .award,.invest-info .assign_board .content_box .main_box .data_box .rate_box p .award,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box p .award,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box p .award,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box p .award,.invest-info .newly_board .content_box .main_box .data_box .detail_box p .award,.invest-info .newly_board .content_box .main_box .data_box .mounth_box p .award,.invest-info .newly_board .content_box .main_box .data_box .rate_box p .award {
    position: absolute;
    margin-top: 20px;
    margin-left: 2px;width: 70px;
    height: 21px;
    padding-left: 2px
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box p .award .award_rate,.invest-info .assign_board .content_box .main_box .data_box .mounth_box p .award .award_rate,.invest-info .assign_board .content_box .main_box .data_box .rate_box p .award .award_rate,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box p .award .award_rate,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box p .award .award_rate,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box p .award .award_rate,.invest-info .newly_board .content_box .main_box .data_box .detail_box p .award .award_rate,.invest-info .newly_board .content_box .main_box .data_box .mounth_box p .award .award_rate,.invest-info .newly_board .content_box .main_box .data_box .rate_box p .award .award_rate {
    font-size: 18px;
    color: #333;
    width: 100%;
    position: absolute;
    margin-top: 2px
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box p .add_ico_no,.invest-info .assign_board .content_box .main_box .data_box .mounth_box p .add_ico_no,.invest-info .assign_board .content_box .main_box .data_box .rate_box p .add_ico_no,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box p .add_ico_no,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box p .add_ico_no,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box p .add_ico_no,.invest-info .newly_board .content_box .main_box .data_box .detail_box p .add_ico_no,.invest-info .newly_board .content_box .main_box .data_box .mounth_box p .add_ico_no,.invest-info .newly_board .content_box .main_box .data_box .rate_box p .add_ico_no {
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box span,.invest-info .assign_board .content_box .main_box .data_box .mounth_box span,.invest-info .assign_board .content_box .main_box .data_box .rate_box span,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box span,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box span,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box span,.invest-info .newly_board .content_box .main_box .data_box .detail_box span,.invest-info .newly_board .content_box .main_box .data_box .mounth_box span,.invest-info .newly_board .content_box .main_box .data_box .rate_box span {
    font-size: 16px;
    color: #999
}

.invest-info .assign_board .content_box .main_box .data_box .detail_box span i,.invest-info .assign_board .content_box .main_box .data_box .mounth_box span i,.invest-info .assign_board .content_box .main_box .data_box .rate_box span i,.invest-info .hotspot_board .content_box .main_box .data_box .detail_box span i,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box span i,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box span i,.invest-info .newly_board .content_box .main_box .data_box .detail_box span i,.invest-info .newly_board .content_box .main_box .data_box .mounth_box span i,.invest-info .newly_board .content_box .main_box .data_box .rate_box span i {
    color: #333
}

.invest-info .assign_board .content_box .main_box .data_box .rate_box,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box,.invest-info .newly_board .content_box .main_box .data_box .rate_box {
    width: 278px
}

.invest-info .assign_board .content_box .main_box .data_box .rate_box p span:first-of-type,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box p span:first-of-type,.invest-info .newly_board .content_box .main_box .data_box .rate_box p span:first-of-type {
    font-size: 40px;
    color: #dab866
}

.invest-info .assign_board .content_box .main_box .data_box .rate_box p span:nth-of-type(2),.invest-info .hotspot_board .content_box .main_box .data_box .rate_box p span:nth-of-type(2),.invest-info .newly_board .content_box .main_box .data_box .rate_box p span:nth-of-type(2) {
    color: #dab866;
    font-size: 18px
}

.invest-info .assign_board .content_box .main_box .data_box .mounth_box,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box,.invest-info .newly_board .content_box .main_box .data_box .mounth_box {
    width: 268px
}

.invest-info .assign_board .content_box .main_box .data_box .mounth_box p span:first-of-type,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box p span:first-of-type,.invest-info .newly_board .content_box .main_box .data_box .mounth_box p span:first-of-type {
    font-size: 40px
}

.invest-info .assign_board .content_box .main_box .data_box .mounth_box p span:nth-of-type(2),.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box p span:nth-of-type(2),.invest-info .newly_board .content_box .main_box .data_box .mounth_box p span:nth-of-type(2) {
    font-size: 18px
}

.invest-info .assign_board .content_box .main_box .data_box .detial_box a,.invest-info .hotspot_board .content_box .main_box .data_box .detial_box a,.invest-info .newly_board .content_box .main_box .data_box .detial_box a {
    margin-top: 12px;
    display: inline-block;
    background: #dab866;
    color: #fff;
    border-radius: 4px;
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center
}

.invest-info .assign_board .content_box .main_box .progress_box,.invest-info .hotspot_board .content_box .main_box .progress_box,.invest-info .newly_board .content_box .main_box .progress_box {
    margin-top: 19px
}

.invest-info .assign_board .content_box .main_box .progress_box .line-wrap,.invest-info .hotspot_board .content_box .main_box .progress_box .line-wrap,.invest-info .newly_board .content_box .main_box .progress_box .line-wrap {
    display: inline-block;
    width: 590px;
    height: 6px;
    border-radius: 6px;
    background-color: #e6e6e6;
    position: relative;
    vertical-align: middle
}

.invest-info .assign_board .content_box .main_box .progress_box .line-wrap .line,.invest-info .hotspot_board .content_box .main_box .progress_box .line-wrap .line,.invest-info .newly_board .content_box .main_box .progress_box .line-wrap .line {
    display: block;
    width: 0;
    height: 6px;
    background-color: #dab866;
    border-radius: 6px
}

.invest-info .assign_board .content_box .main_box .progress_box .special,.invest-info .hotspot_board .content_box .main_box .progress_box .special,.invest-info .newly_board .content_box .main_box .progress_box .special {
    font-size: 16px;
    color: #999;
    margin-left: 4px;
    vertical-align: middle
}

.invest-info .assign_board .content_box .main_box .list_kinds,.invest-info .hotspot_board .content_box .main_box .list_kinds,.invest-info .newly_board .content_box .main_box .list_kinds {
    position: absolute;
    top: 0;
    right: 0
}

.invest-info .assign_board .content_box .regist_box,.invest-info .hotspot_board .content_box .regist_box,.invest-info .newly_board .content_box .regist_box {
    float: right;
    width: 356px;
    height: 228px;
    background: #fff;
    position: relative
}

.invest-info .assign_board .content_box .regist_box p,.invest-info .hotspot_board .content_box .regist_box p,.invest-info .newly_board .content_box .regist_box p {
    text-align: right;
    position: absolute;
    right: 10px;
    bottom: 10px
}

.invest-info .assign_board .content_box .regist_box p i,.invest-info .hotspot_board .content_box .regist_box p i,.invest-info .newly_board .content_box .regist_box p i {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-left: 8px;
    border-radius: 50%;
    cursor: pointer;
    background: rgba(99,99,99,.4)
}

.invest-info .assign_board .content_box .regist_box p .active_yes,.invest-info .hotspot_board .content_box .regist_box p .active_yes,.invest-info .newly_board .content_box .regist_box p .active_yes {
    background: rgba(66,66,66,.9)
}

.invest-info .assign_board .content_box .full_type,.invest-info .hotspot_board .content_box .full_type,.invest-info .newly_board .content_box .full_type {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: hsla(0,0%,100%,.6);
    display: none
}

.invest-info .assign_board .content_box .full_type span,.invest-info .hotspot_board .content_box .full_type span,.invest-info .newly_board .content_box .full_type span {
    display: inline-block;
    font-size: 24px;
    color: #fff;
    background: hsla(0,0%,51%,.6);
    width: 110px;
    height: 110px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -55px;
    margin-left: -55px;
    line-height: 110px;
    text-align: center;
    border-radius: 50%
}

.invest-info .assign_board .board_icon h3:nth-of-type(2),.invest-info .hotspot_board .board_icon h3:nth-of-type(2) {
    float: right
}

.invest-info .assign_board .board_icon h3:nth-of-type(2) a,.invest-info .hotspot_board .board_icon h3:nth-of-type(2) a {
    height: 43px;
    display: inline-block;
    padding: 0 10px;
    line-height: 43px;}

.invest-info .assign_board .board_icon h3:nth-of-type(2) a:hover,.invest-info .hotspot_board .board_icon h3:nth-of-type(2) a:hover {
    color: #666;
  }

.invest-info .assign_board .content_box .main_box,.invest-info .hotspot_board .content_box .main_box {
    width: 355px
}

.invest-info .assign_board .content_box .main_box .title img,.invest-info .hotspot_board .content_box .main_box .title img {
    margin-top: 5px
}

.invest-info .assign_board .content_box .main_box .data_box,.invest-info .hotspot_board .content_box .main_box .data_box {
    padding-top: 24px
}

.invest-info .assign_board .content_box .main_box .data_box .rate_box,.invest-info .hotspot_board .content_box .main_box .data_box .rate_box {
    width: 175px
}

.invest-info .assign_board .content_box .main_box .data_box .mounth_box,.invest-info .hotspot_board .content_box .main_box .data_box .mounth_box {
    width: 130px
}

.invest-info .assign_board .content_box .main_box .progress_box,.invest-info .hotspot_board .content_box .main_box .progress_box {
    margin-bottom: 5px
}

.invest-info .assign_board .content_box .main_box .progress_box .line-wrap,.invest-info .hotspot_board .content_box .main_box .progress_box .line-wrap {
    width: 270px
}

.invest-info .assign_board .content_box .main_box .progress_box .special,.invest-info .hotspot_board .content_box .main_box .progress_box .special {
    font-size: 14px
}

.invest-info .assign_board .content_box .margin_16,.invest-info .hotspot_board .content_box .margin_16 {
    margin: 0 16px
}

.invest-info .full_hover:hover .full_type {
    display: inline-block
}
.satatus{
	display: inline-block;
	border-radius: 4px;
	border:1px solid #dab866;
	color:#dab866;
	margin-top: 5px;
	padding: 2px 5px;
	font-size: 12px;
}
.animate_h:hover {
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    box-shadow: 0 5px 15px #e5e5e5;
    transition: All .4s ease-in-out;
    -webkit-transition: All .4s ease-in-out;
    -moz-transition: All .4s ease-in-out;
    -o-transition: All .4s ease-in-out;
}
</style>