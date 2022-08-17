import { defineComponent, inject } from 'vue'
import { FieldPropsDefine } from '../types'
import { SchemaFormContextKey } from '../context'

export default defineComponent({
  name: 'ObjectField',
  props: FieldPropsDefine,
  setup() {
    return () => {
      const context = inject(SchemaFormContextKey)
      return <div>Object Field</div>
    }
  }
})
