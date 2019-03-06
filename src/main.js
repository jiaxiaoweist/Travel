import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

