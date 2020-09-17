<template>
  <div class="video-controls row">
    <button @click="play()">Play</button>
    <button @click="pause()">Pause</button>
    <button @click="skip(-5)">Back 5</button>
    <button @click="skip(-10)">Back 10</button>
    <button @click="skip(-15)">Back 15</button>
    <button @click="skip(5)">Fwd 5</button>
    <button @click="skip(10)">Fwd 10</button>
    <button @click="skip(15)">Fwd 15</button>
    <button>Insert Start</button>
    <button>Insert Stop</button>

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
import { defineComponent, computed } from 'vue'
import appState from '../state'

export default defineComponent({
  setup() {
    const player = computed(() => { return appState.videoElement } )

    const play = () => {
      player.value.play()
    }

    const pause = () => {
      player.value.pause()
    }

    const skip = (seconds) => {
      player.value.currentTime += seconds
    }

    return {
      player,
      play,
      pause,
      skip
    }
  }
})
</script>