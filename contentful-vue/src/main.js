import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import i18n from './locales/i18n.js'

import RichTextRenderer from 'contentful-rich-text-vue-renderer';



const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
