<template>
    <div class="login">
        <section>
            <img src="../../images/logo.jpg" alt="logo"  class="login">
            <!-- 表单内容 -->
            <!-- model用来设置表单所有字段, rules用来设置表单校验规则的(可省略, 但是如果需要表单校验功能, 必须写)  -->
            <el-form :model="ruleForm2" :rules="rules2" status-icon show-message ref="abc" label-width="100px" class="demo-ruleForm">

                <!-- label用来设置表单提示文字, prop用来指定当前表单代表的字段名(可省略, 但是如果需要表单校验与重置功能, 必须写) -->
                <el-form-item label="账号" prop="uname">
                    <!-- v-model双向数据绑定, 需要绑定data里的数据, 将来要把这些数据提交给后端 -->
                    <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="upwd">
                    <!-- 双向数据绑定对象的密码,这个对象就是传入后台的参数对象 -->
                    <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="success" @click="submitForm('abc')" icon="el-icon-upload">登陆</el-button>
                    <el-button @click="resetForm('abc')" class="right" icon="el-icon-warning">重置</el-button>
                </el-form-item>

            </el-form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
            // 校验函数, rule可以拿到被校验字段的信息与校验规则, value可以拿到字段的值
            // 如果校验通过必须调用callback, 不通过不要调用
            // var validatePass = (rule, value, callback) => {
            //   if (value === "") {
            //     callback(new Error("请输入密码"));
            //   } else {
            //     if (this.ruleForm2.checkPass !== "") {
            //       this.$refs.ruleForm2.validateField("checkPass");
            //     }
            //     callback();
            //   }
            // };
            return {
                // 这里的字段要按照接口文档进行修改
                ruleForm2: {
                    uname: "admin",
                    upwd: "123456"
               },
                // 这里添加的校验规则, 每个字段可以加多个, 所以是个数组
                rules2: {
                    //分别为必填,不填的提示,
                    uname: [{ required: true, message: "登录admin", trigger: "blur" }],
                    upwd: [{ required: true, message: "密码123456", trigger: "blur" }]
                }
            };
        },
        methods: {
            login() {
                // post请求的第二个参数是发送的数据, 这里直接把data里的表单对象传过去
                this.$http.post(this.$api.login, this.ruleForm2).then((res) => {
                    if(res.data.status==0){
                        this.$alert('登录成功',"马上要跳转",{callback:()=>{
                                //存储用户的uname
                            localStorage.setItem('uname',res.data.message.uname)
                                // 跳转页面,就是切换路由;
                            this.$router.push({name:'admin'})
                         }
                        })
                    }else{
                        this.$alert('账号密码错误');
                    }
                });
            },
            // 登陆按钮方法
            // this.$refs用来获取页面中的元素或组件, 这里通过它拿到form表单组件, 调用validate方法, 给所有表单进行校验
            submitForm(abc) {
                // validate传入一个回调, 如果valid为true, 证明通过校验, 否则不通过
                this.$refs[abc].validate(valid => {
                    if (valid) {
                    this.login();
                    } else {
                    this.$alert("账号或密码不合格!");
                    }
                });
            },
            // 重置按钮方法
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
};
</script>

<style scoped lang="less">
.login {
  height: 100%;
  background-color: skyblue;
  section {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: 3px solid #0094ff;
    border-radius: 5px;
    box-sizing: border-box;
    padding-right: 50px;
    padding-top: 30px;
    .right{
        position: relative;
        left: 50px;
        background-color: red;
    }
    .login{
        display: block;
        position: relative;
        height: 80px;
        width: 80px;
        left: 170px;
        top:-20px;
        border-radius: 50%;
    }
  }
}
</style>