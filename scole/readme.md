# 1.原生js文件导出实例化方法（可传参）
	export function CFCMScole(param) {
		return new CFCMScole(param)
	}
# 2.npm包index文件接收CFCMScole参数，并把该参数添加到vue原型对象里面
	import {CFCMScole} from './src/Plugins_es6_scole.babel.min.js'
	export default {
	 	install: function(Vue) {
 		 Object.defineProperty(Vue.prototype, '$Scole', { value: CFCMScole });
	  }
	}
# 3.发布npm包（eg:CFCMScole）
# 4.npm安装CFCMScole
# 5.在路由中引入CFCMScole,并使用vue.use()安装js插件（安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法将被作为 Vue 的参数调用。）
	import CFCMScole from 'cfcscole'
	Vue.use(CFCMScole)
# 6.定义scroll.vue文件如下（需要注意的是，使用方法一定要放到mounted方法里面）
	
	<script type="text/javascript">
	export default {
	  name: 'Scole',
	  data () {
	    return {
	      msg: '信息'
	    }
	  },
	  mounted: function () {
	    console.log(this.$Scole())
	  }
	}
	</script>
# 7.将该单文件放置到需要嵌入的组件即可。
# 注意事项：
	样式表需要自行引入。
	以上说明针对vue使用