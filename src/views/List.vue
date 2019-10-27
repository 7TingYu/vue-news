<template>
  <div class="list">
    <ul>
      <li v-for="(item,key) in pageList" :key="key" @click="toInfo(item)">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "list",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    toInfo(item) {
      store.item = item;
      this.$router.push("/info");
    }
  },
  computed: {
    pageList() {
      return store.state.list;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin: 0.5rem;
  height: calc(100vh - 5rem);
  overflow: scroll;
  li {
    box-sizing: border-box;
    border: 1px solid #42b983;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0.2rem 0.2rem 0.2rem #ddd;
    .title {
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.5rem;
      font-weight: bold;
    }
    .content {
      padding-top: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>