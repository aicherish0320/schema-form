import { FieldPropsDefine } from '../types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StringField',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      return (
        <input
          type="text"
          value={props.value}
          onChange={(e: any) => props.onChange(e.target.value)}
        />
      )
    }
  }
})
