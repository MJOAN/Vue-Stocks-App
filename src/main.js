import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-stocks-app.firebaseio.com/'

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString()
})

const router = new VueRouter({ // routes configured
	mode: 'history', 
	routes
});

new Vue({ // addd routes to vue instance and vue application
  el: '#app',
  router,
  store,
  render: h => h(App)
})
