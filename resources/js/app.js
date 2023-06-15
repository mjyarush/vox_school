import Vue from 'vue';

import AdminPage from "./components/page/AdminPage.vue";

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        AdminPage,
    }
})
