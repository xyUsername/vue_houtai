<template>
    <div>
        <!-- logo -->
        <div class="aside_logo">
            <img src="../../../images/logo.jpg" alt="logo" width="80px" class="logo">
        </div>

        <!-- 导航菜单 -->
        <!-- nav: default-active属性用来设置默认打开的菜单 -->
        <el-menu default-active="2" class="aside_menu" text-color="#0094ff" active-text-color="red">

            <!-- subnav: key属性需要一个唯一值用于for循环渲染时性能优化, index属性同样需要一个唯一值用于展开导航列表  6个分类-->
            <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
                <!-- nav_title -->
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <!-- 大标题 -->
                    <span>{{ item.title }}</span>
                </template>

                <!-- nav_item 下拉内容.小标题 -->
                <el-menu-item v-for="subItem in item.submenu" :key="subItem.text" :index="subItem.text">
                    <!-- 每个子title都是一个a链接, 可以点击, 所以使用router-link, 记得设置to属性 -->
                    <router-link :to="subItem.path">
                        <i class="el-icon-document"></i>
                        <span>{{ subItem.text }}</span>
                    </router-link>
                </el-menu-item>

            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    { title: '学员问题', submenu:
                        [
                            { text: '内容管理', path: '/admin/goods/list' },
                            { text: '类别管理', path: '/admin/goods/detail/:id' },
                            { text: '评论管理', path: '/admin/goods/comment'}
                        ]
                    },
                    // { title: '前端技术', submenu:
                    //     [
                    //         { text: '内容管理', path: '/' },
                    //         { text: '类别管理', path: '/' },
                    //         { text: '评论管理', path: '/' },
                    //     ]
                    // },
                    // { title: '难点答疑', submenu:
                    //     [
                    //         { text: '内容管理', path: '/' },
                    //         { text: '类别管理', path: '/' },
                    //         { text: '评论管理', path: '/' },
                    //     ]
                    // },
                    // { title: '资源下载', submenu:
                    //     [
                    //         { text: '内容管理', path: '/' },
                    //         { text: '类别管理', path: '/' },
                    //         { text: '评论管理', path: '/' },
                    //     ]
                    // },
                    // { title: '商品管理', submenu:
                    //     [
                    //         { text: '内容管理', path: '/' },
                    //         { text: '类别管理', path: '/' },
                    //         { text: '评论管理', path: '/' },
                    //     ]
                    // },
                    // { title: '订单管理', submenu:
                    //     [
                    //         { text: '订单列表', path: '/' },
                    //     ]
                    // },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .aside_logo{
        width: 100%;
        .logo{
            margin-left: 60px;
            margin-top: 10px;
            display: block;
            border-radius: 50%;
            border: 5px solid #a0fefe;
        }
    }
    .aside_menu{
        width: 200px;
        margin-top: 10px;
        background-color:#a0fefe;
    }
</style>    