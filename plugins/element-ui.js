import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Element, { locale })
  Vue.use(VueAxios, axios)
}
