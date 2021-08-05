import { createApp } from 'vue';
import App from './App.vue';
import Router from '../src/router';
import { create, NButton, NCard, NConfigProvider, NSpace } from 'naive-ui';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';

const app = createApp(App);

const Naive = create({
  components: [NButton, NConfigProvider],
});

app.config.globalProperties.$darkTheme = false;

app.use(Naive);
app.use(Router);
app.mount('#app');
