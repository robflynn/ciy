import { createApp } from "vue"
import App from "./components/app.vue"
import SplitPane from 'vue-split-panel'

document.addEventListener('DOMContentLoaded', () => {
  let app = createApp(App)

  app.component('Split', SplitPane)

  app.mount('#ciy')
})
