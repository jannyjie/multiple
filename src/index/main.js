import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
const app = createApp(App)
app.use(router)
app.mount('#app');

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')