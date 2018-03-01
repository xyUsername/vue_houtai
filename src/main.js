// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// //默认会找到index.js路由,所以这里不用加index.js
// import vueRouter from './router'
// import App from './component/App.vue'
// Vue.use(ElementUI)

// new Vue({
//     el:'#app',
//     render:createElement => createElement(App),
//     router:vueRouter
// })
//引入vue
import Vue from 'vue'
import App from './component/App.vue'
//默认会找到index.js路由,所以这里不用加index.js,注意路径
import vueRouter from './router'
//引入element-ui的组件及css



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//导入全局样式表


import 'normalize.css'
import axios from 'axios' //不是vue插件,导入之后只能在当前使用;
import api, { domain } from './js/api.js'
import './less/login.less'
Vue.use(ElementUI)
//配置默认域名:
axios.defaults.baseURL = domain
// 因为我们调用的接口跨域,默认情况下接口给我们设置的cookie无效的,为了让他们有效,我们必须添加此配置
axios.defaults.withCredentials = true
//为了方便,把axios和api添加到vue的原型里面去,将来vue的组件就可以直接使用了;
Vue.prototype.$http=axios
Vue.prototype.$api=api

new Vue({
    el:'#app',
    render: createElement => createElement(App),
    router:vueRouter
})