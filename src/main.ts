import "element-closest"
import { createApp } from "vue"
import App from "./components/app.vue"
import CaptionsList from './components/captions_list.vue'
import VideoControls from './components/video_controls.vue'
import VideoPlayer from './components/video_player.vue'

document.addEventListener('DOMContentLoaded', () => {
  let app = createApp(App)

  app.component('captions-list', CaptionsList)
  app.component('video-controls', VideoControls)
  app.component('video-player', VideoPlayer)

  app.mount('#ciy')
})
