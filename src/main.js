import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-chartjs"; // npm install vue-chartjs chart.js --save
import Converter from './components/Converter.vue';
import Chart from './components/Chart.vue';

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/converter',
      component: Converter
    }, {
      path: '/chart',
      component: Chart
    },
  ]
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
