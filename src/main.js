import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './component/App.vue'
Vue.use(ElementUI)
//默认会找到index.js路由,所以这里不用加index.js
import vueRouter from './router'
new Vue({
    el:'#app',
    render:createElement => createElement(App),
    router:vueRouter
})