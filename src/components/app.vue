<template>
  <div class="ciy">
    <div class="sidebar">
      sidebar
    </div>

    <div class="content">
      content
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import Split from 'split.js'

export default defineComponent({
  setup() {
    onMounted(() => {
      Split(['.sidebar', '.content'], {
        sizes: [33, 66],
        minSize: 320
      })
    })

    return {
    }
  }
});
</script>

<style lang="scss" scoped>
.ciy {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .sidebar {}
  .content {}
}
</style>
