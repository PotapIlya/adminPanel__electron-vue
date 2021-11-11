import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plagins/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/app.scss'

// import Vuelidate from 'vuelidate'

createApp(App)
    .use(store)
    .use(router)
    // @ts-ignore
    // .use(Vuelidate)
    .mount('#app')
