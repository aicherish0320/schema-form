<template>
  <div>
    <input type="text" :value="value" @input="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { Schema } from '../../lib/types'

// eslint-disable-next-line no-undef
const props = defineProps<{
  schema: Schema
  value: string
  onChange: (v: any) => void
}>()

const handleChange = (e: any) => {
  console.log('e >>> ', e)
  props.onChange(e.target.value)
}
</script>

<style scoped></style>
