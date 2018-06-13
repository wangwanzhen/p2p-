<template>
  <div id="app">
   		<Loading v-show="isLoading"></Loading>
   		<transition name="slide-down">
			<router-view></router-view>
   		</transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	name: 'App',
	computed:mapGetters([
		'isLoading'
	]),
	/*watch: {
		$route(newV,oldV){
			// let id = newV.path.replace(/\/details\//,'')
			var patt1 = /\/details\/(\d+)/;
			if(newV.path =='/personCenter' ||  patt1.test(newV.path)){
				this.$store.dispatch('hideHead')
			}else{
				this.$store.dispatch('showHead')
			}
		}
	},
	mounted(){
			var patt1 = /\/details\/(\d+)/;
			if(this.$route.path =='/personCenter' ||  patt1.test(this.$route.path)){
				this.$store.dispatch('hideHead')
			}else{
				this.$store.dispatch('showHead')
			}
	},*/
	components:{
	}
}
</script>

<style>
.slide-up-enter-active, .slide-up-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .7;
	  transform: translate3d(0, 4em, 0);
	}
	.slide-up-enter, .slide-up-leave-active {
	  opacity: .3;
	  transform: translate3d(0, 4em, 0);
	}

	.slide-down-enter-active, .slide-down-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .7;
	  transform: translate3d(0, 6em, 0);
	}
	.slide-down-enter, .slide-down-leave-active {
	  opacity: .1;
	  transform: translate3d(0, 6em, 0);
	}

	.slide-left-enter-active, .slide-left-leave-active {
	  transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .5;
	  transform: translate3d(2em, 0, 0);
	}

	.slide-left-enter, .slide-left-leave-active {
	  opacity: .3;
	  transform: translate3d(2em, 0, 0);
	}

	.slide-right-enter-active, .slide-right-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .5;
	  transform: translate3d(5em, 0, 0);
	}
	.slide-right-enter, .slide-right-leave-active {
	  opacity: .3;
	  transform: translate3d(5em, 0, 0);
	}

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .4s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>
