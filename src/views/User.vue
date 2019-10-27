<template>
  <div class="user">
    <div class="userBox">
      <img src="../assets/header.jpg" alt="头像" class="header" />
      <div class="name">{{userName}}</div>
      <div class="title">欢迎来到个人中心</div>
      <div class="add" @click="add">添加</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  },
  props: {},
  components: {
  },
  mounted() {},
  methods: {
    add() {
      this.$router.push("/add");
    }
  },
  computed:{
      userName() {
          return localStorage.getItem('name')
      }
  }
};
</script>

<style lang="scss" scoped>
.userBox {
  display: flex;
  height: calc(100vh - 4rem);
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  img{
      width: 6rem;
      height: 6rem;
      border: 5px solid #42b983;
      border-radius: 50%;
  }
  .title,.name{
      margin: .5rem;
  }
  .add{
      width: 80%;
      height: 2rem;
      background: #42b983;
      margin-top: 1rem;
      color: #fff;
      text-align: center;
      line-height: 2rem;
      border-radius: .5rem
  }
  
}
</style>