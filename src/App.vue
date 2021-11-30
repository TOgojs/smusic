<template>
  <el-container id="app">
    <el-aside width="250px">
      <Side></Side>
    </el-aside>
    <el-main>
      <el-button type="info" @click="change('dark')">暗色</el-button>
      <el-button @click="change('light')">亮色</el-button>
      <Container></Container>
    </el-main>
  </el-container>
  <!-- 播放器位置 -->
</template>

<script>
import { onMounted } from "vue";
import Side from "@/components/Side.vue";
import Container from "@/components/Container.vue";
export default {
  components: {
    Side,
    Container,
  },
  setup() {
    onMounted(() => {
      // 初始亮色
      document.body.setAttribute("data-user-color-scheme", "light");
    });

    function change(params) {
      document.body.setAttribute("data-user-color-scheme", params);
    }
    return {
      change,
    };
  },
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
