import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Datatable from 'vue2-datatable-component'

Vue.use(Router)
Vue.use(Datatable)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
