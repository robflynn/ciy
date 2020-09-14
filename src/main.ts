import { createApp } from "vue"
import App from "./components/app.vue"
import CaptionsList from './components/captions_list.vue'
import VideoControls from './components/video_controls.vue'

document.addEventListener('DOMContentLoaded', () => {
  let app = createApp(App)

  app.component('captions-list', CaptionsList)
  app.component('video-controls', VideoControls)

  app.mount('#ciy')
})
