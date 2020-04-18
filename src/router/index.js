import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/home'),
      name: 'Index',
      meta: { title: '首页' }
    },
    {
      path: '/tan1',
      component: () => import('@/views/control/tan1'),
      name: 'Condition',
      meta: { title: '初始化条件' }
    },
    {
      path: '/tan2',
      component: () => import('@/views/control/tan2'),
      name: 'Foot',
      meta: { title: '足垫是否对称' }
    }
  ]
})