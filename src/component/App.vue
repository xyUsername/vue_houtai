<template>
  <div>
    {{msg}}
    <!-- 路由要放到根组件里面 -->
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'公共部分'
    }
  }
}
</script>

<style>
  div {
    color: red;
  }
</style>