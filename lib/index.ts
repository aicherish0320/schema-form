import { defineComponent, h } from 'vue'

export default defineComponent({
  props: ['schema', 'uiSchema', 'onChange', 'contextRef', 'value'],
  setup() {
    return () => h('div', 'this is form')
  }
})
