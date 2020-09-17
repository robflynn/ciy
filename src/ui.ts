const fade = require('fade')
const prefixed = require('prefixed')

const promisedFadeOut = (element, speed): Promise<HTMLElement> => {
  return new Promise((resolve) => {
    fade.out(element, speed, () => {
      resolve(element)
    })
  })
}

export async function fadeOut(ele: string, speed: number)
export async function fadeOut(ele: HTMLElement, speed: number)
export async function fadeOut<T>(ele: HTMLElement | string, speed: number = 500) {
  let element: HTMLElement | null

  if (typeof ele === "string") {
    element = document.querySelector(ele)
  } else {
    element = ele
  }

  if (!element) { return }

  await promisedFadeOut(element, speed)
}

export function slideUp(ele: HTMLElement, speed: number = 350): Promise<HTMLElement> {
  return new Promise((resolve) => {
    let oldTransition = prefixed.get(ele.style, 'transition') || ''

    let s = ele.style

    s.boxSizing = 'border-box'
    s.height = ele.offsetHeight + 'px'
    s.overflow = 'hidden'

    s.transitionProperty = 'height, margin, padding'
    s.transitionDuration = `${speed}ms`

    s.height = '0'
    s.paddingTop = '0'
    s.paddingBottom = '0'
    s.marginTop = '0'
    s.marginBottom = '0'

    setTimeout(() => {
      s.visibility = 'none'

      resolve(ele)
    }, speed)
  })
}


