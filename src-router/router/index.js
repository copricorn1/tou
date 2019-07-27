import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
Vue.use(Router)
/*最终向外暴露  路由器对象*/
export default new Router({
  //n个路由
  routes:[{
    path:'/about',
    component:About

  },
    {
      path:'/home',
      component:Home,
      children:[
        {
            path:'news',
            components:News
        },
        {
          path: 'message', component: Message
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    },

  ],
  linkActiveClass: 'active'
})
