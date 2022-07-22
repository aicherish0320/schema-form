import { createApp, defineComponent, h } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('./assets/logo.png')

// import App from "./App.vue"
const App = defineComponent({
  render() {
    return h('div', { id: '#app' }, [
      h('img', { src: img }),
      h(HelloWorld, { msg: 'Hello', age: 12 })
    ])
  }
})

createApp(App).mount('#app')
