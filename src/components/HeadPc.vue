<template>
	<div id="headerPc" >
	    <div class="header_nav">
	        <div class="nav-wrapper clearfix">
	            <div class="logo">
	                <a href="" class="">
	                	<img src="../assets/images/logo1.png" class="logo-1">
	                	<img src="../assets/images/logo2.png" class="logo-2">
	                	<img src="../assets/images/logo3.png">
	                </a>
	            </div>
	            <div class="nav_list">
	                <ul>
	                    <li><a href="" class="active">首页</a></li>
	                    <li><a href="" class="">我要投资</a></li>
	                    <li><a href="" class="">关于小九</a></li>
	                    <li><a href="" class="">信息披露</a></li>
	                </ul>
	            </div>
	        </div>
	    </div>
	    <div class="header_nav_fixed" v-if="fixed">
	        <div class="nav-wrapper clearfix">
	            <div class="logo">
	                <a href="" class="">
	                	<img src="../assets/images/logo1.png" class="logo-1">
	                	<img src="../assets/images/logo2.png" class="logo-2">
	                	<img src="../assets/images/logo3.png">
	                </a>
	            </div>
	            <div class="nav_list">
	                <ul>
	                    <li><a href="" class="active">首页</a></li>
	                    <li><a href="" class="">我要投资</a></li>
	                    <li><a href="" class="">关于小九</a></li>
	                    <li><a href="" class="">信息披露</a></li>
	                </ul>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
export default{
	name:'headerPc',
	data(){
		return {
			fixed:false
		}
	},
	mounted(){
		window.addEventListener('scroll', this.scrollLittle)
	},
	methods:{
		scrollLittle() {
            if (document.documentElement.scrollTop>50) {
            	this.fixed = true;
            }else if(document.documentElement.scrollTop<50){
            	this.fixed = false;
            }
        }
	}
}
</script>

<style scoped>
.header_nav, .header_nav_fixed {
    position: relative;
    z-index: 10;
    box-shadow: 0 3px 3px 1px rgba(51, 51, 51, .1)
}

.header_nav .active, .header_nav_fixed .active {
    border-bottom: 4px solid #dab866
}

.header_nav .nav-wrapper, .header_nav_fixed .nav-wrapper {
    width: 1100px;
    margin: 0 auto;
    line-height: 70px
}

.header_nav .nav-wrapper .logo, .header_nav_fixed .nav-wrapper .logo {
    float: left
}

.header_nav .nav-wrapper .logo .logo-1, .header_nav_fixed .nav-wrapper .logo .logo-1 {
    margin-right: 48px
}

.header_nav .nav-wrapper .logo .logo-2, .header_nav_fixed .nav-wrapper .logo .logo-2 {
    margin-right: 16px
}

.header_nav .nav-wrapper .logo img, .header_nav_fixed .nav-wrapper .logo img {
    vertical-align: middle
}

.header_nav .nav-wrapper .nav_list, .header_nav_fixed .nav-wrapper .nav_list {
    float: right;
    line-height: 70px
}

.header_nav .nav-wrapper .nav_list ul li, .header_nav_fixed .nav-wrapper .nav_list ul li {
    float: left;
    font-size: 18px;
    color: #333
}

.header_nav .nav-wrapper .nav_list ul li a, .header_nav_fixed .nav-wrapper .nav_list ul li a {
    display: block;
    width: 76px;
    height: 66px;
    text-align: center;
    margin-left: 40px
}

.header_nav .nav-wrapper .nav_list ul li a.active, .header_nav_fixed .nav-wrapper .nav_list ul li a.active {
    font-weight: 700
}

.header_nav .nav-wrapper .nav_list ul li .router-link-active, .header_nav .nav-wrapper .nav_list ul li a:hover, .header_nav_fixed .nav-wrapper .nav_list ul li .router-link-active, .header_nav_fixed .nav-wrapper .nav_list ul li a:hover {
    border-bottom: 4px solid #dab866
}

.header_nav_fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 210
}
</style>