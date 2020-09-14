<template>
  <div class="video-controls row">
    <button>Play</button>
    <button>Pause</button>
    <button>RW</button>
    <button>FF</button>
    <button>Insert Start</button>
    <button>Insert Stop</button>
    <button>Back 5</button>
    <button>Back 10</button>
    <button>Back 15</button>
    <button>Fwd 5</button>
    <button>Fwd 10</button>
    <button>Fwd 15</button>
    <span class="video-controls__time">00:00:00</span>
  </div>
</template>

<style lang="scss" scoped>
.row {
  $gap: 5px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > * {
    margin: $gap;
  }
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
    }
  }
})
</script>