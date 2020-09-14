<template>
  <div class="captions-list">
    <div class="captions-list__item">
      <div class="row between">
        <span class="index">1</span>
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

export default defineComponent({
  setup() {
    return {}
  }
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