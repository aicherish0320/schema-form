<template>
  <Hello></Hello>
  <World></World>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import World from './components/World'
import Hello from './components/Hello'
export default defineComponent({
  name: 'App',
  components: {
    World,
    Hello
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
