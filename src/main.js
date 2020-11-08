import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axiosApi from 'axios';

const axios = axiosApi.create({
    baseURL:`https://jsonplaceholder.typicode.com`,
});

//Use the window object to make it available globally.
window.axios = axios;

createApp(App).use(router, window.axios).mount('#app')
