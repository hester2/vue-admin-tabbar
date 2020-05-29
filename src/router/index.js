import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '../page/home/index';


Vue.use(Router)

const routes = [{
		path: '/',
		name: 'Home',
		component: homeComponent
	},
	{
		path: '/home/layout',
		name: 'layout',
		component: () => import('../page/components/layout'),
		children: [{
			path: '/home/tab1',
			name: 'tab1',
			component: () => import('../page/tab1'),
		}, {
			path: '/home/tab2',
			name: 'tab2',
			component: () => import('../page/tab2'),
		}]
	}
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
