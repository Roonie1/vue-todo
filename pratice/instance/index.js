import Vue from 'vue'

const app = new Vue({
  template: '<div ref="div">{{text}}</div>',
  data: {
    text: 'text'
  }
})
app.$mount('#app')

app.$options.render = (h) => {
  return h('div', {}, 'new render function')
}
console.log(app.$refs)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$isServer)

app.$on('text', () => {
  console.log('text emited')
})

app.$emit('text')

// app.$forceUpdate
