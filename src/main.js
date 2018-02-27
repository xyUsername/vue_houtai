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
//引入element-ui的组件及css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//默认会找到index.js路由,所以这里不用加index.js,注意路径
import vueRouter from './router'
import App from './component/App.vue'
Vue.use(ElementUI)

new Vue({
    el:'#app',
    render: createElement => createElement(App),
    router:vueRouter
})