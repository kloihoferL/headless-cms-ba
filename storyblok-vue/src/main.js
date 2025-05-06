import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import router from './router';
import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';
import Event from './components/Event.vue';
import GetInTouch from './components/GetInTouch.vue';
import Header from './components/Header.vue';
import Dynamic from './components/Dynamic.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'bootstrap';

import i18n from './i18n.js'

const app = createApp(App);
app.use(router)
app.use(i18n)

app.use(StoryblokVue, {
  accessToken: 'tO44LN9wq5Ahr78TMAQNQgtt',
  use: [apiPlugin],
  apiOptions: {
    region: ''
  }
});

app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);
app.component('Event', Event);
app.component('GetInTouch', GetInTouch);
app.component('Header', Header);
app.component('Dynamic', Dynamic);
app.mount('#app');
