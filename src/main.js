// main.js

import { createApp } from 'vue';

import './style.css'; // Assuming you have a separate CSS file
import App from './App.vue'; // Your main Vue component
import router from './router'; // Vue Router configuration

createApp(App).
use(router).
mount('#app');

