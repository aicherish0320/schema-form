import { inject } from 'vue'
import { CommonFieldType } from './types'

export const SchemaFormContextKey = Symbol()

export function useVJSFContext() {
  const context: { SchemaItem: CommonFieldType } = inject(SchemaFormContextKey)

  if (!context) {
    throw Error('SchemaForm should be used')
  }

  return context
}
