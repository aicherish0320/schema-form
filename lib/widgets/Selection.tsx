import { defineComponent, PropType, ref, watch } from 'vue'

export default defineComponent({
  name: 'SelectionWidget',
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true
    },
    options: {
      type: Array as PropType<
        {
          key: string
          value: any
        }[]
      >,
      required: true
    }
  },
  setup(props) {
    const currentValueRef = ref(props.value)

    watch(currentValueRef, (newVal) => {
      if (newVal !== props.value) {
        props.onChange(newVal)
      }
    })

    watch(
      () => props.value,
      (v) => {
        if (v !== currentValueRef.value) {
          currentValueRef.value = v
        }
      }
    )

    return () => {
      return (
        <select multiple={true} v-model={currentValueRef.value}>
          {props.options.map((op) => (
            <option value={op.value}>{op.key}</option>
          ))}
        </select>
      )
    }
  }
})
