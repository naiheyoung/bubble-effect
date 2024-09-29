import { h, createApp, isVNode } from 'vue'
import rnd from '~/composables/rnd'

class Bubble {
  width: number;
  height: number;
  top: number;
  left: number;
  delay: number;

  constructor(top: number, left: number, delay: number, size: number) {
    this.width = size
    this.height = size
    this.top = top
    this.left = left
    this.delay = delay
  }
}

export const generateBubbles = (el: Ref, anime: string, child: VNode | string) => {
  el.value.style.position = 'relative'
  let bubbles: Array<Bubble> = [];
  const { width: elWidth } = el.value && el.value.getBoundingClientRect()
  const bubbleCount = (elWidth / 50) * 10
  for (let i = 0; i <= bubbleCount; i++) {
    bubbles.push(new Bubble(rnd(20, 80), rnd(0, 95), rnd(0, 30) / 10, rnd(40, 80) / 10))
  }

  const app = createApp({
    render: () => [isVNode(child) ? h(child) : child, ...bubbles.map(bubble => h('span', {
      class: ['bubble'],
      style: {
        top: `${bubble.top}%`,
        left: `${bubble.left}%`,
        width: `${bubble.width}px`,
        height: `${bubble.height}px`,
        animationDelay: `${bubble.delay}s`,
      }
    }))]
  })
  app.mount(el.value)
}
