<template>
	<div id="details">
		<div class="about-content">
			<p class="title">
				{{detailsData.title}}		
				<span class="f_22 dis_b mt_20" style="color:#595757;">{{detailsData.meiti_laiyuan?detailsData.meiti_laiyuan:''}}：{{(detailsData.time*1000?detailsData.time*1000:0) | normalTime()}}</span>
			</p>
			<div style="padding:0 1rem" class="news_img" v-html="contents"></div>
		</div>
	</div>
</template>

<script>
export default{
	name:'detail',
	data () {
		return {
			detailsData:{},
        	dizhi:'',
        	contents:''
		}
	},
	created(){
    	this.fetchData();
	},
	mounted () {
    },
    methods: {
    	fetchData () {
    		let id = this.$route.path.replace(/\/details\//,'');
    		let _this = this;
    		this.$http({
    			method: 'get',
    			url:URLS+'/App/message/news_details',
    			params: {
    				content_id:id
    			}
    		}).then(function(response) {
    			// console.log(response.data)
				_this.dizhi = 'http://'+response.data.data.dizhi;
				_this.detailsData = response.data.data.list_newsde;
				let artice = _this.htmlDecodeByRegExp(response.data.data.list_newsde.content);
				_this.contents = artice.replace('/'+response.data.data.pingtai_yuming+'/upload','http://'+response.data.data.dizhi+'/'+response.data.data.pingtai_yuming+'/upload')
			});
    	},
    	htmlDecodeByRegExp:function (str){  
             var s = "";
             if(str.length == 0) return "";
             s = str.replace(/&amp;/g,"&");
             s = s.replace(/&lt;/g,"<");
             s = s.replace(/&gt;/g,">");
             s = s.replace(/&nbsp;/g," ");
             s = s.replace(/&#39;/g,"\'");
             s = s.replace(/&quot;/g,"\"");
             return s;  
       }
    }
}
</script>

<style>
.about-content {
	padding: 0.5rem 0 0.5rem 0;
	background-color: #fff;
	min-height: 12rem;
}
.about-content .title {
    font-size: 0.8rem;
    width: 16.75rem;
    padding: 0.5rem 1rem;
    background: #f8f8f8;
    font-size: 0.9rem;
    color: #595757;
    margin-bottom: 1rem;
}
.about-content p {
    width: 16.75rem;
    margin: auto;
    font-size: 0.6rem;
    word-break: break-all;
}
.mt_20 {
    margin-top: 0.5rem;
}
.f_22 {
    font-size: 0.6rem;
}
.dis_b {
    display: block;
}
.about-content img{
	max-width: 100%;
}
</style>