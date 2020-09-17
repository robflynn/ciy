<template>
  <div class="ciy">
    <div class="sidebar">
      <video-player />
      <video-controls />
    </div>

    <div class="content">
      <captions-list  />
    </div>
  </div>

</template>

<script lang="ts">
import { global as EventBus } from "../lib/event_bus"
import Split from 'split.js'

import { defineComponent, ref, onMounted, reactive } from "vue"
import appState from '../state'

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
    background: var(--color-captions-list-background);
  }
}
</style>
