// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './utils/diyaxios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import Vuerify from 'vuerify'
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '12e90f772a2153c903e76f6190aa2983',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});
lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
});
Vue.use(Vuerify/*, 添加自定义规则，默认提供了 email, required, url 等规则 */) 
Vue.use(MuseUI)
Vue.config.productionTip = false
Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
