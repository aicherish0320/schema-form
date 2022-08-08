<template>
  <div>
    <input type="number" :value="value" @input="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { Schema } from '../../lib/types'

// eslint-disable-next-line no-undef
const props = defineProps<{
  schema: Schema
  value: number
  onChange: (v: any) => void
}>()

const handleChange = (e: any) => {
  const value = e.target.value
  const num = Number(value)
  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>

<style scoped></style>
