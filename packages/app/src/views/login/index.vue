<template>
  <div class="login">
    <div class="login-form">
      <el-form :model="formMode" :rules="formRules" ref="formRefs" class="rule-form">
        <el-form-item prop="userName">
          <el-input
            clearable
            v-model.trim="formMode.userName"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            clearable
            type="password"
            show-password
            v-model.trim="formMode.passWord"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item prop="verify">
          <el-input
            maxlength="4"
            onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
            v-model.number="formMode.verify"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="onLogin">登录</el-button>
          <el-button @click="onReset">重置</el-button>
          <span class="tips" @click="onChangPage">注册</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue"
import { useRouter } from "vue-router"
import { setCookie } from "../../utils/cookie"

export default {
  name: "login",
  setup() {
    const router = useRouter()

    const formRefs = ref(null)

    const state = reactive({
      formMode: {
        userName: "",
        passWord: "",
        verify: null
      },
      formRules: {
        userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度必须不小于6位", trigger: "blur" }
        ],
        verify: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { type: "number", message: "验证码必须是数字类型", trigger: "blur" }
        ]
      }
    })

    const toPage = (value) => {
      setCookie("info", value)
      router.push("/")
    }

    const onLogin = async () => {
      formRefs.value.validate((valid) => {
        if (valid) {
          let { userName } = state.formMode
          toPage(userName)
        } else {
          return false
        }
      })
    }

    const onReset = () => {
      formRefs.value.resetFields()
    }

    const onChangPage = () => {}

    return {
      ...toRefs(state),
      formRefs,
      onLogin,
      onReset,
      onChangPage
    }
  }
}
</script>

<style lang="scss">
.login-form {
  width: 30vw;
  height: 48vh;
  position: absolute;
  border-radius: 20px;
  right: 100px;
  top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .7);
  .rule-form {
    width: 80%;
    .tips {
      color: #409eff;
      float: right;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
