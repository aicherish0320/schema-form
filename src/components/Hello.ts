import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(1)
    setInterval(() => {
      count.value++
    }, 1000)
    // 不会更新
    // const countVal = count.value
    return () => {
      const countVal = count.value
      return h('h1', count.value + 'Hello ' + countVal)
    }
  }
})
