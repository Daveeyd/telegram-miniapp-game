import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { filters } from './filters';  // Importing filters

const app = createApp(App);

app.use(router);

app.config.globalProperties.$filters = filters;  // Assigning filters to globalProperties

app.mount('#app');