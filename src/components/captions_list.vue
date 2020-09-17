<template>
  <div class="captions-list">
    <div v-for="caption in captions" :key="caption.id" class="captions-list__item">
      <div class="row between">
        <span class="index">{{ caption.id }}</span>
        <div class="buttons">
          <button>X</button>
        </div>
      </div>

      <div class="row">
        <div class="captions-list__item__text">
          Caption text goes here
        </div>
      </div>

      <div class="row between">
        <span class="intime">00:00:00;00</span>
        <span class="outtime">00:00:01;00</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import captions from '../state'

export default defineComponent({
  setup() {
    return {
      captions: captions.captions
    }
  },
})
</script>


<style lang="scss" scoped>
$cellPadding: 10px;

.row {
  display: flex;
  flex-direction: row;

  > * {
    padding: $cellPadding;
  }

  &.between {
    justify-content: space-between;
  }
}
</style>