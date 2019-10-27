<template>
  <div class="info">
    <div class="title">{{item.title}}</div>
    <div class="content">{{item.content}}</div>
    <button @click="back" class="active">返回</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "info",
  data() {
    return {
      item: store.item
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    back() {
      this.$router.push("/home/list");
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  margin: 1rem;
  display: flex;
  height: 80vh;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  .title {
    box-sizing: border-box;
    font-weight: bold;
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0 1rem 0;
    padding-left: 0.5rem;
    outline: none;
    border-bottom: 1px solid #42b983;
    background: transparent;
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    margin: 0.5rem 0 1rem 0;
    padding-left: 0.5rem;
  }
  button {
    width: 80%;
    height: 1.8rem;
    border: 1px solid #42b983; //自定义边框
    border-radius: 0.2rem;
    outline: none; //消除默认点击蓝色边框效果
    background: #fff;
    color: #42b983;
  }
  .active {
    background: #42b983;
    color: #fff;
  }
}
</style>