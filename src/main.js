import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'
import { VueFire, VueFireAuth } from 'vuefire'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import {
  firebaseApp,
  
} from "./firebase";

const vuetify = createVuetify({
  components,
  directives,
})

const intervalMS = 3
const updateSW = registerSW({
  onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
})
updateSW({ immediate: true })

const app = createApp(App).use(vuetify)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})
// app.config.globalProperties.$messaging = firebaseMessaging
app.mount('#app')
