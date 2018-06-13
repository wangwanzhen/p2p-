<template>
	<div id="header">
		<div class="header">
			<span class="close" v-if="Back"></span>
			<slot name="name"></slot>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	props:{
		Back:{
			type:Boolean,
			default:true
		}
	}
}
</script>

<style scoped lang="scss">
@import '../style/mixin';
.header{
	line-height: 2rem;
	background: $color;
	@include sc(1rem,#fff);
	text-align: center;
	position:fixed;
	top:0;
	left:0;
	width:100%;
	z-index:101;
	.close {
		display:inline-block;
		background:url(../assets/img/back.png) no-repeat left center;
		@include wh(2rem,2rem);
		background-size: 1.3rem;
		position: absolute;
		top:0;
		left:0;
	}
}
</style>