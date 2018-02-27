<template>
  <div>
    {{msg}}
    <el-button type="danger">危险按钮</el-button>
    <!-- 路由要放到根组件里面 -->
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world',
      input: ''
    }
  }
}
</script>

<style>
  div {
    color: red;
  }
</style>