<template>
  <div class="login">
    <form v-if="!isReg">
      <h2>欢迎登陆</h2>
      <p>用户名：</p>
      <input type="text" v-model="name" />
      <p>密码：</p>
      <input type="password" v-model="password" />
      <div class="btnBox">
        <button class="active" @click="login">登入</button>
        <button @click="reg">注册</button>
      </div>
    </form>
    <form v-else>
      <h2>请注册</h2>
      <p>用户名：</p>
      <input type="text" v-model="name" />
      <p>密码：</p>
      <input type="password" v-model="password" />
      <p>确认密码：</p>
      <input type="password" v-model="repeat" />
      <div class="btnBox">
        <button class="active" @click="addUser">确定</button>
        <button @click="cancel">取消</button>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  components: {},
  methods: {
    login() {
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        this.name = "";
        this.password = "";
        this.$router.push("/home/list");
      } else {
        alert("用户名或密码输入不正确");
      }
    },
    reg() {
      this.isReg = true;
    },
    addUser() {
      if (this.password === this.repeat) {
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        this.name = "";
        this.password = "";
        this.repeat = "";
        this.isReg = false;
      } else {
        alert("两次密码输入有误");
      }
    },
    cancel() {
      this.isReg = false;
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  margin: 1em;
  h2 {
    color: #42b983;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #eee;
  }
  p {
    padding: 0.3rem;
  }
  input {
    position: relative;
    left: 3rem;
    width: 70%;
    height: 1.2rem;
    border: 1px solid #42b983;
  }
  .btnBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1.5rem;
    button {
      width: 8rem;
      height: 1.8rem;
      border: 1px solid #42b983; //自定义边框
      border-radius: .2rem;
      outline: none; //消除默认点击蓝色边框效果
      background: #fff;
      color: #42b983;
    }
    .active {
      background: #42b983;
      color: #fff;
    }
  }
}
</style>
