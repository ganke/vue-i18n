// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lang1 from './lang'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
    locale: 'zh-CN', // set locale
    messages:lang1, // set locale messages
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
