import { reactive, toRefs } from "vue"
import * as uuid from 'uuid'

interface Caption {
  id: string
}

const createCaptions = (num) => {
  let captions: Caption[] = []

  for (var i = 0; i < num; i++) {
    let caption = { id: uuid.v1() }

    captions.push(caption)
  }

  return captions
}

const state = reactive({
  selectedCaption: null,
  captions: createCaptions(20),
})

const meow = async () => {
  console.log('meow')
}

const appState = {
  ...toRefs(state), meow
}

export default appState