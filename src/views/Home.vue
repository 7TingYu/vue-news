<template>
  <div class="home">
    <router-view />
    <ul class="footer">
      <li class="icons">
        <router-link :to="{name: 'list'}">新闻列表</router-link>
      </li>
      <li class="icons">
        <router-link :to="{name: 'user'}">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  .footer {
    position: fixed;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .icons {
    font-size: 16px;
    flex: 1;
    text-align: center;
    border-top: 1px solid #42b983;
    a {
      color: #42b983;
      display: block;
      &.active {
        color: #fff;
        background: #42b983;
      }
    }
  }
}
</style>