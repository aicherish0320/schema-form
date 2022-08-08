import { defineComponent } from 'vue'
import NumberField from './fields/NumberField'
import StringField from './fields/StringField'
import { FieldPropsDefine, SchemaTypes } from './types'

export default defineComponent({
  name: 'SchemaItem',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props
      const type = schema.type

      let Component: any
      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break

        case SchemaTypes.NUMBER:
          Component = NumberField
          break

        default:
          console.warn(`${type} is no supported`)
      }

      return <Component {...props} />
    }
  }
})
