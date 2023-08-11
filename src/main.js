import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

// import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import './styles/global.scss';

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.mount('#app');