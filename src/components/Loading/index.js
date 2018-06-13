import LoadingComponent from './Loading.vue'

const loading = {
	install: function(Vue){
		Vue.component('Loading',LoadingComponent)
	}
}
export default loading