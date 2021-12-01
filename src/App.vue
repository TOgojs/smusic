<template>
  <el-container id="app">
    <el-aside width="250px">
      <el-scrollbar>
        <Side></Side>
      </el-scrollbar>
    </el-aside>

    <el-main style="padding: 0">
      <el-scrollbar>
        <Container></Container>
      </el-scrollbar>
    </el-main>
  </el-container>
  <!-- 播放器位置 -->
</template>

<script>
import Side from "@/components/Side.vue";
import Container from "@/components/Container.vue";
export default {
  components: {
    Side,
    Container,
  },
  setup() {},
};
</script>

<style lang="scss">
@import url(./assets/css/color.css);
html,
body {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
}

.el-aside {
  background-color: var(--menu-background-color);
  transition: all ease 0.4s;
  border-right: 1px solid var(--menu-border-color);
}

.el-main {
  transition: all ease 0.4s;
  background-color: var(--cont-background-color);
  color: var(--text-color);
}
</style>
