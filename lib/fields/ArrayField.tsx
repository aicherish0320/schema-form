import { defineComponent } from 'vue'
import { useVJSFContext } from '../context'
import { FieldPropsDefine, Schema } from '../types'

export default defineComponent({
  name: 'ArrayField',
  props: FieldPropsDefine,
  setup(props) {
    const context = useVJSFContext()

    const handleMultiTypeChange = (v: any, index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []

      arr[index] = v
      props.onChange(arr)
    }

    return () => {
      const schema = props.schema as Schema
      const rootSchema = props.rootSchema as Schema
      const { value } = props

      const SchemaItem = context.SchemaItem
      const isMultiType = schema?.items

      if (isMultiType) {
        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s: Schema, index: number) => (
          <SchemaItem
            schema={s}
            key={index}
            rootSchema={rootSchema}
            value={arr[index]}
            onChange={(v: any) => handleMultiTypeChange(v, index)}
          />
        ))
      }

      return null
    }
  }
})
