import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

// import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import VueLazyLoad from 'vue3-lazyload';

import './styles/global.scss';
import './assets/mainProgramacion.css';
import './assets/mainIlustracion.css';

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.use(VueLazyLoad);
app.mount('#app');