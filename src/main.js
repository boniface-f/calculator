import Vue from 'vue'
import App from './App'


import binding from './binding.js'
Vue.prototype.binding = binding.calculator;
// console.log("export binding2:",Vue);



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
