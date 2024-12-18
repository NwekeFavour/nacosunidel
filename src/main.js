import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'

createApp(App).use(router).use(stores).mount('#app')
