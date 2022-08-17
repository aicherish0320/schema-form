import { computed, defineComponent } from 'vue'
import NumberField from './fields/NumberField'
import StringField from './fields/StringField'
import ObjectField from './fields/ObjectField'
import { retrieveSchema } from './utils'
import { FieldPropsDefine, Schema, SchemaTypes } from './types'

export default defineComponent({
  name: 'SchemaItem',
  props: FieldPropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const schema = props.schema as Schema
      const { rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })

    return () => {
      const schema = props.schema as Schema
      console.log(props)

      const retrievedSchema = retrievedSchemaRef.value

      const type = schema.type

      let Component: any
      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break

        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        case SchemaTypes.OBJECT:
          Component = ObjectField
          break
        default:
          console.warn(`${type} is no supported`)
      }

      return <Component {...props} schema={retrievedSchema} />
    }
  }
})
