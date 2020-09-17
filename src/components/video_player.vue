<template>
  <div class="video-player">
    <video src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_10MB.mp4"></video>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import appState from "../state"

export default defineComponent({
  setup() {
    onMounted(() => {
      appState.videoElement = document.querySelector('video')
    })

    return {
    }
  },
})
</script>


<style lang="scss" scoped>
</style>