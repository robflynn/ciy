import { reactive, toRefs } from "vue"
import * as uuid from 'uuid'

interface Caption {
  id: string,
  text: string | null
}

const createCaptions = (num) => {
  let captions: Caption[] = []

  for (var i = 0; i < num; i++) {
    let caption = { id: uuid.v4(), text: null }

    captions.push(caption)
  }

  return captions
}

const state = reactive({
  selectedCaption: null,
  captions: createCaptions(20),
  videoElement: null
})

const meow = async () => {
  console.log('meow')
}

const removeCaption = async (uuid) => {
  for (var i = 0; i < state.captions.length; i++) {
    if (state.captions[i].id == uuid) {
      state.captions.splice(i, 1)

      // Always keep one blank caption
      if (state.captions.length == 0) {
        state.captions.push(createCaptions(1)[0])
      }

      return
    }
  }
}

const appState = {
  ...toRefs(state), removeCaption
}

export default appState