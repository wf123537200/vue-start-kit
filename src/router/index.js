import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/pages/Demo'
import Page1 from '@/pages/Page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    }, {
      path: '/page1',
      name: 'Page1',
      component: Page1
      // 此处 可以添加子路由
      /*
      children:[
        {path:'/page1/xx',component:List}
      ]
      */
    }
  ]
})
