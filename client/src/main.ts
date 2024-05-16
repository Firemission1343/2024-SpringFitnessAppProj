import './assets/main.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from 'vue-toastification'
import Oruga from '@oruga-ui/oruga-next';

const app = createApp(App)

app
    .use(router)
    .use(Toaster, {})
    .use(Oruga)

app.mount('#app')
