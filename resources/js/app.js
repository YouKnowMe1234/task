import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import excel from 'vue-excel-export';
//import the new composition api in order to make it work in Vue@2.x
import VueComp from '@vue/composition-api'
Vue.config.productionTip = false
    //use the vue-composition-api plugin
Vue.use(VueComp)
Vue.use(excel);
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});