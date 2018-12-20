import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home/home.vue'
import find from './components/find/find.vue'
import order from './components/order/order.vue'
import user from './components/user/user.vue'
import login from  './components/user/login.vue'
import item from './components/item/item.vue'
Vue.use(Router)


// 二级路由
export default new Router({
  routes: [
   {
     path:'/',component:home
   },
   {
    path:'/find',component:find
  },
  {
    path:'/order',component:order
  },
  {
    path:'/user',component:user
  },
  {
    path:'/login',component:login
  },
  {
    path:'/item/:id',component:item
  }
  ],
  mode:'history'
})
