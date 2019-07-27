import  Vue from 'vue'
import  App from './App'

new Vue({
  el:'#app',
  components:{App},//将 App 映射为标签
  template:'<App/>',
  render: h => h(App)
});
