<!-- 登录页面 -->
<template>
  <div class="app-login">
    <div class="login-box">
      <div class="login-img">
        <h1>
          <img
            src="http://v.bootstrapmb.com/2018/9/chyqh2194/images/logo1.png"
            alt=""
          />
        </h1>
      </div>
      <div class="login-form">
        <el-form :model="form" ref="Loginform" :rules="rules">
          <el-form-item label="用户名" label-width="162px" prop="username">
            <el-col :span="12">
              <el-input
                v-model="form.username"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item
            label="密码"
            label-width="160px"
            dropzone=""
            prop="password"
          >
            <el-col :span="12">
              <el-input
                v-model="form.password"
                show-password
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label-width="190px">
            <el-button type="primary" @click="handelLogin('Loginform')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import  myaxios  from "@/myaxios/axios";
import { login } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handelLogin: function (Loginform) {
      console.log("提交信息");
      this.$refs[Loginform].validate(async (valid) => {
        if (valid) {
          // 发起请求 获取数据
          this.$message("效验成功");
          let result = await login({
              user_name: this.form.username,
              password: this.form.password,
            })
            // console.log(result);
            if(result.status === 1){
                this.$message('登录成功')
                this.$router.push({
                    name:'Dashboard'
                })
            }else{
                this.$message({
                    message:'账号或密码有误',
                    type:'warning',
                })
            }
        } else {
          this.$message({
            type: "warning",
            message: "账号或密码有误",
          });
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.app-login {
  height: 100vh;
  background: #2174bc;
  overflow: hidden;
}
.login-box {
  width: 610px;
  height: 390px;
  background: #ffffff;
  margin: 50px auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 10px;
  box-sizing: border-box;
}
.login-img {
  width: 590px;
  height: 160px;
  border-radius: 4px;
  background: url(http://demo.kangjingept.com:8020/cssthemes6/11.14ZF6/static/images/login_img.png)
    no-repeat;
}
.login-img h1 img {
  margin: 50px;
}
.login-form {
  padding: 10px 0;
  width: 580px;
  height: 200px;
}
.el-button {
  width: 100px;
  height: 40px;
}
</style>