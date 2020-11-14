import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

//Use the window object to make it available globally.
window.axios = axios;

createApp(App).use(router, window.axios).mount('#app')
