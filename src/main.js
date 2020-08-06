import Vue from 'vue'
import Home from './Home';
import Tasks from './Tasks';

Vue.config.productionTip = false


const routes = {
  '/': Home,
  '/tasks': Tasks
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] // || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
