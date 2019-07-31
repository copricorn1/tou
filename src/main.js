import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import '@/styles/icon.css'
import '../src/icons/iconfont'

Vue.use(ElementUI)
import  $ from 'jquery'
new Vue({
  el:'#app',
  render: h => h(App)
});
