import Vue from 'vue'

new Vue({
  el: '#app',
  template: `
    <div>
      {{isActive: 'active' : 'not active'}}
    </div>
  `,
  data: {
    isActive: false
  }
})
