<template>
  <!-- 左侧菜单 -->
  <!-- 右侧内容 -->
  <!-- 播放器位置 -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->

  <el-container id="app" class="theme-light">
    <el-aside width="200px">Aside</el-aside>
    <el-main> eqwewq</el-main>
  </el-container>
</template>

<style lang="scss">
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
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  text-align: center;
  line-height: 160px;
}
</style>
