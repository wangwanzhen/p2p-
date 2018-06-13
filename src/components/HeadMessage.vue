<template>
	<div id="header">
		<ul class="top_nav">
			<router-link tag="li" to="/news">网站公告</router-link>
			<router-link tag="li" to="/media">新闻媒体</router-link>
		</ul>
	</div>
</template>

<script>

export default {
	name:'HeadMessage'
}
</script>
<style scoped lang="scss">
@import '../style/mixin';
.top_nav{
	@include fj();
	position:fixed;
	top:0;
	width:100%;
	z-index: 100;
	background:#fff;
}
.top_nav li{
	text-align: $c;
	@include fx();
	@include hl(1.8rem,1.8rem);
	font-size: 0.8rem;
	box-sizing:border-box;

}
.router-link-active{
	color:$color;
	border-bottom:2px solid $color;
}
</style>