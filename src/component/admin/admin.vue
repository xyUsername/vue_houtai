<template>
    <div class="admin">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
                <app-header>
                </app-header>
            </el-header>
                <el-container class="admin_content">
                    <!-- 公共左侧 -->
                    <el-aside width="200px">
                        <app-aside></app-aside>
                    </el-aside>
                        <!-- 变化的后台管理子页面 -->
                        <el-main class="el-main">
                            <router-view></router-view>
                        </el-main>
                </el-container>
        </el-container>
    </div>
</template>

<script>
    //引入子组件的模块
    import Header from './subcom/Header.vue';
    import Aside from './subcom/Aside.vue';

    export default {
        // 注册子组件
        components: {
            appHeader: Header,
            appAside: Aside
        }
    }
</script>

<style scoped lang="less">
    .admin{
        height: 100%;
        width: 100%;
        .el-header{
            text-align: right;
            line-height: 60px;
            background-color:#95ddee;
        }
        .el-container{
            height: 100%;
        }
        .admin_content{
            width: 200px;
            width: 100%;
            height: 100%;
        }
        .el-aside{
            background-color: #95ddee;
        }
    }
</style>