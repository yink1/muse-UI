import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import tab1 from '@/components/tab1'
import tab2 from '@/components/tab2'
import tab3 from '@/components/tab3'
import view from '@/components/view'
import viewm from '@/components/viewm'
import viewn from '@/components/viewm'
import parent from '@/components/parent'
import ewm from '@/components/ewm'
import map from '@/components/map'
import QRCode from 'qrcode'
Vue.use(Router)
Vue.use(QRCode)

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior (to, from, savedPosition) {
    const toDepth = to.path.split('/')
    const toUrl = toDepth[toDepth.length-1]
    const fromDepth = from.path.split('/').length
    if(toUrl == 'tab1' || toUrl == 'tab2' || toUrl == 'tab3'){
      return 
    }
    if(savedPosition) {
      return savedPosition
    }else{
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
      {
        path: 'tab1',
        component: require('../components/tab1')
      },
      {
        path: 'tab2',
        component: require('../components/tab2')
      },
      {
        path: 'tab3',
        component: require('../components/tab3')
      },
      {path: '/',
      name: 'views',
      component: require('../components/view')
      },
      {
      path: '/views',
      name: 'views',
      component: require('../components/view')
    },
    {
      path: '/viewm',
      name: 'viewm',
      component: require('../components/viewm')
    },      
    {
      path: '/viewn',
      name: 'viewn',
      component: require('../components/viewn')
    }
    ]    
  },
  {
    path: '/parent',
    name: 'parent',
    component: require('../components/parent')
  },
  {
    path: '/showInLoading',
    name: 'showInLoading',
    component: require('../components/showInLoading')
  },
  {
    path: '/ewm',
    name: 'ewm',
    component: require('../components/ewm')
  },
  {
    path: '/map',
    name: 'map',
    component: require('../components/map')
  }
  ]  
})
