import Vue from 'vue'
import App from './components/App.vue' //
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)

// Appはコンポーネントのオブジェクト
new Vue({
  render: h => h(App), //ES6の書き方
}).$mount('#app')



// render: h => ('div', 'こんにちは')
// render: function (h) {
//   return h(App)
// }
