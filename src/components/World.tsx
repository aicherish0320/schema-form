import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Hello from './Hello'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('@/assets/logo.png')

export default defineComponent({
  setup() {
    const count = ref(1)
    // setInterval(() => {
    //   count.value++
    // }, 1000)
    return () => {
      return (
        <div>
          <input type="text" v-model={count.value} />
          <img src={img} />
          <button>{count.value}</button>
          <Hello msg={'123'} />
          {/* <HelloWorld age={123} /> */}
        </div>
      )
    }
  }
})
