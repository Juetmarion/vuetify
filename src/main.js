import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme:  {
    primary: colors.indigo.base,
    secondary: colors.purple.base,
    accent: colors.pink.base,
    error: colors.red.base,
    warning: colors.teal.base,
    info: colors.cyan.base,
    success: colors.green.base
    }
})
new Vue({
  el: '#app',
  render: h => h(App)
})



