import News from '../components/News'
import Media from '../components/Media'
import Details from '../components/Details'
import Home from '../components/Home'
import TenderDetails from '../components/TenderDetails.vue'
export default [
	{
		path: '/',
		name: '',
		component: Home
	},{
		path: '/news',
		name: 'news',
		component: News
	},{
		path: '/media',
		name: 'media',
		component: Media
	},{
		path: '/details/:id',
		name: 'details',
		component: Details
	},{
		path: '/Home',
		name: 'Home',
		component: Home
	},
	{
		path: '/tenderdetail/:jiekuan_id',
		name: 'tenderdetail',
		component: TenderDetails
	}
]