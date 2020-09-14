<template>
  <div class="ciy">
    <div class="sidebar">
      <video src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_10MB.mp4"></video>

      <video-controls />
    </div>

    <div class="content">
      <captions-list />
    </div>
  </div>

</template>

<script lang="ts">
import { global as EventBus } from "../lib/event_bus"
import { defineComponent, ref, onMounted } from "vue"
import Split from 'split.js'

export default defineComponent({
  setup() {
    onMounted(() => {
      Split(['.sidebar', '.content'], {
        sizes: [33, 66],
        minSize: 320,
      })
    })

    return {
    }
  }
});
</script>

<style lang="scss">
.ciy {
  $padding: 0.5rem;

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .sidebar {
    padding: $padding;
    display: flex;
    flex-direction: column;

    video {
      width: 100%;
    }
  }

  .content {
    padding: $padding;
  }
}
</style>
