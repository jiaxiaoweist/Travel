import Vue from 'vue/dist/vue.esm.js'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }
    ]
})
