<template>
  <div class="add">
    <div>标题</div>
    <input class="title" type="text" v-model="title" placeholder="请输入标题" />
    <div>内容</div>
    <textarea class="content" type="text" v-model="content" placeholder="内容..." />

    <div class="btnBox">
      <button class="active" @click="add">添加</button>
      <button @click="back">返回</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "add",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    add() {
      if (!this.title || !this.content) {
        alert("请输入你要上传的内容");
        return;
      }
      store.commit("addItem", {
        title: this.title,
        content: this.content
      });
      this.title = "";
      this.content = "";
      this.$router.push("/home/list");
    },
    back() {
      this.$router.push("/home/list");
    }
  }
};
</script>

<style lang="scss" scoped>
.add {
  margin: 1rem;
  font-weight: bold;
  display: flex;
  height: 80vh;
  flex-flow: column nowrap;
  input {
    box-sizing: border-box;
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0 1rem 0;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #42b983;
    background: transparent;
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    margin: 0.5rem 0 1rem 0;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #42b983;
    background: transparent;
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
}
</style>