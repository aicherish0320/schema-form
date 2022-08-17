import { DefineComponent, defineComponent, inject } from 'vue'
import { FieldPropsDefine, Schema } from '../types'
import { SchemaFormContextKey } from '../context'
import { isObject } from '../utils'

type SchemaItemDefine = DefineComponent<typeof FieldPropsDefine>

export default defineComponent({
  name: 'ObjectField',
  props: FieldPropsDefine,
  setup(props) {
    const context: { SchemaItem: SchemaItemDefine } =
      inject(SchemaFormContextKey)

    if (!context) {
      throw Error('SchemaForm should be used')
    }

    const handleObjectFieldChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}
      if (!v) {
        delete value[key]
      } else {
        value[key] = v
      }
      props.onChange(value)
    }

    return () => {
      const schema = props.schema as Schema
      const rootSchema = props.rootSchema as Schema
      const { value } = props

      const { SchemaItem } = context

      const properties = schema.properties || {}

      const currentValue = isObject(value) ? value : {}

      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem
          schema={properties[k]}
          rootSchema={rootSchema}
          value={currentValue}
          key={index}
          onChange={(v: any) => handleObjectFieldChange(k, v)}
        />
      ))
    }
  }
})
