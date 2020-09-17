<template>
  <div class="captions-list">
    <div v-for="(caption, index) in captions" :key="caption.id" class="captions-list__item" :data-uuid="caption.id">
      <div class="row between">
        <span class="index">{{ index + 1 }}</span>
        <div class="buttons">
          <a role="button" data-action="delete-caption" class="captions-list__item__delete" @click="deleteCaption($event)">
            <span class="icon-delete"></span>
          </a>
        </div>
      </div>

      <div class="row">
        <div class="captions-list__item__text">
          {{ caption.text }}
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
import appState from '../state'
import { fadeOut, slideUp } from '../ui'

export default defineComponent({
  setup() {
    const deleteCaption = async (e) => {
      let caption = e.target.closest('.captions-list__item')
      let uuid = caption.dataset.uuid

      await fadeOut(caption, 250)
      await slideUp(caption, 100)

      appState.removeCaption(uuid)
    }

    return {
      captions: appState.captions,
      deleteCaption,
    }
  },
})
</script>


<style lang="scss" scoped>
$cellPadding: 10px;

.icon-delete {
  width: 20px;
  height: 20px;

  display: inline-block;
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%22512pt%22%20viewBox%3D%22-47%200%20512%20512%22%20width%3D%22512pt%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m416.875%20114.441406-11.304688-33.886718c-4.304687-12.90625-16.339843-21.578126-29.941406-21.578126h-95.011718v-30.933593c0-15.460938-12.570313-28.042969-28.027344-28.042969h-87.007813c-15.453125%200-28.027343%2012.582031-28.027343%2028.042969v30.933593h-95.007813c-13.605469%200-25.640625%208.671876-29.945313%2021.578126l-11.304687%2033.886718c-2.574219%207.714844-1.2695312%2016.257813%203.484375%2022.855469%204.753906%206.597656%2012.445312%2010.539063%2020.578125%2010.539063h11.816406l26.007813%20321.605468c1.933594%2023.863282%2022.183594%2042.558594%2046.109375%2042.558594h204.863281c23.921875%200%2044.175781-18.695312%2046.105469-42.5625l26.007812-321.601562h6.542969c8.132812%200%2015.824219-3.941407%2020.578125-10.535157%204.753906-6.597656%206.058594-15.144531%203.484375-22.859375zm-249.320312-84.441406h83.0625v28.976562h-83.0625zm162.804687%20437.019531c-.679687%208.402344-7.796875%2014.980469-16.203125%2014.980469h-204.863281c-8.40625%200-15.523438-6.578125-16.203125-14.980469l-25.816406-319.183593h288.898437zm-298.566406-349.183593%209.269531-27.789063c.210938-.640625.808594-1.070313%201.484375-1.070313h333.082031c.675782%200%201.269532.429688%201.484375%201.070313l9.269531%2027.789063zm0%200%22%2F%3E%3Cpath%20d%3D%22m282.515625%20465.957031c.265625.015625.527344.019531.792969.019531%207.925781%200%2014.550781-6.210937%2014.964844-14.21875l14.085937-270.398437c.429687-8.273437-5.929687-15.332031-14.199219-15.761719-8.292968-.441406-15.328125%205.925782-15.761718%2014.199219l-14.082032%20270.398437c-.429687%208.273438%205.925782%2015.332032%2014.199219%2015.761719zm0%200%22%2F%3E%3Cpath%20d%3D%22m120.566406%20451.792969c.4375%207.996093%207.054688%2014.183593%2014.964844%2014.183593.273438%200%20.554688-.007812.832031-.023437%208.269531-.449219%2014.609375-7.519531%2014.160157-15.792969l-14.753907-270.398437c-.449219-8.273438-7.519531-14.613281-15.792969-14.160157-8.269531.449219-14.609374%207.519532-14.160156%2015.792969zm0%200%22%2F%3E%3Cpath%20d%3D%22m209.253906%20465.976562c8.285156%200%2015-6.714843%2015-15v-270.398437c0-8.285156-6.714844-15-15-15s-15%206.714844-15%2015v270.398437c0%208.285157%206.714844%2015%2015%2015zm0%200%22%2F%3E%3C%2Fsvg%3E);
  background-size: cover;
}

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

.captions-list {
  height: 100%;
  overflow-y: scroll;

  scrollbar-color: v;

  &__item {
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
    padding: 0.25rem;
    margin-right: 0.5em;

    border: inset 1px;

    background-color: var(--color-captions-list--item-background);

    &__delete {
      cursor: pointer;

      .icon-delete {
        opacity: 0.5;
        transition: opacity 0.15s ease-in-out;

        &:hover {
          opacity: 1.0;
        }
      }
    }
  }
}
</style>