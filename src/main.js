import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.title) document.title = `${to.meta.title} - 桌面系统`
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')