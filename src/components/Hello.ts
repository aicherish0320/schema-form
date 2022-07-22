import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup() {
    const count = ref(1)
    const add = () => {
      console.log('12312 >>> ')
      count.value++
    }
    // setInterval(() => {
    //   count.value++
    // }, 1000)
    // 不会更新
    // const countVal = count.value
    return () => {
      const countVal = count.value
      return h(
        'h1',
        {
          onClick: add
        },
        'Hello' + countVal
      )
    }
  }
})
