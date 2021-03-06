// //路由配置
// import Vue from 'vue'
// import VueRouter from 'vue-router' //这是基于vue 的一个插件;

// //导入其他组件:
// import login from '../component/login/Login.vue'
// import register from '../component/register/Register.vue'
// //只要是使用插件,都需要加下面一段:
// Vue.use(VueRouter);
// //导出实例
// export default new VueRouter({
//     routes:[
//         {name:'login',path:'/login',component: login},
//         { name: 'register', path: '/register', component: register}
//     ]
// })

//路径配置
import Vue from 'vue'
import VueRouter from 'vue-router' //这是基于vue 的一个插件;

//导入其他组件
import login from '../component/login/Login.vue'
import admin from '../component/admin/admin.vue'
import GoodComment from '../component/admin/goods/comment/Comment.vue'
import GoodDetail from '../component/admin/goods/detail/Detail.vue'
import GoodList from '../component/admin/goods/list/List.vue'
const goods = [
    { name: 'goodComment', path: 'goods/comment', component: GoodComment },
    { name: 'goodDetail', path: 'goods/detail/:id', component: GoodDetail },
    { name: 'goodList', path: 'goods/list', component: GoodList },
]
//只要是使用插件,都需要加下面一段
Vue.use(VueRouter);
//导出实例
export default new VueRouter({
    routes:[
        {name:'login',path:'/login',component:login},
        {name:'login11',path:'*',redirect: '/login'},
        { name: 'admin', path: '/admin', component: admin,
            children: [...goods]
        }
    ]
})