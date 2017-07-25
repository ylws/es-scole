import {CFCMScole} from './src/Plugins_es6_scole.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Scole', { value: CFCMScole });
  }
}