require('./bootstrap');

window.Vue = require('vue').default;
import router from './router'
import AppVue from './AppVue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate/src'
import store from './store'
import vuetify from './utils/vuetify'

import CoreLayout from './layouts/CoreLayout'
import EmptyLayout from './layouts/EmptyLayout'
import Vue from 'vue'

Vue.component('core-layout', CoreLayout)
Vue.component('empty-layout', EmptyLayout)
Vue.component('app-vue', require('./AppVue.vue').default)


Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(vuetify)

let app

app = new Vue({
    el: '#app',
    render: h => h(AppVue),
    vuetify,
    router,
    store
})

