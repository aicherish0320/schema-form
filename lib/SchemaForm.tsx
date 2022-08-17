import { defineComponent } from 'vue'
import { FieldPropsDefine } from './types'
import SchemaItem from './SchemaItem'

export default defineComponent({
  name: 'SchemaForm',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    return () => {
      const { schema, value } = props
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  }
})
