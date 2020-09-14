import { createApp } from "vue"
import App from "./components/app.vue"
import CaptionsList from './components/captions_list.vue'

document.addEventListener('DOMContentLoaded', () => {
  let app = createApp(App)

  app.component('captions-list', CaptionsList)

  app.mount('#ciy')
})
