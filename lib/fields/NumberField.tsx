import { FieldPropsDefine } from '../types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      return (
        <input
          type="number"
          value={props.value}
          onChange={(e: any) => props.onChange(e.target.value)}
        />
      )
    }
  }
})
