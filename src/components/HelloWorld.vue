<template>
  <div class="hello">
    <h1>{{ msg }}-{{ age }}</h1>
    <button @click="handleClick">Click {{ count }}-{{ double }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true
  }
} as const

export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
  setup(props, { slots, emit, attrs }) {
    const count = ref(1)
    const state = reactive({
      double: 2
    })
    const handleClick = () => {
      count.value += 1
      state.double += 2
    }
    return {
      count,
      state,
      ...toRefs(state),
      handleClick
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
