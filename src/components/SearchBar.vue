<template>
  <div class="search-bar">
    <div class="left">
      <div class="to">
        <!-- disable -->
        <el-icon class="to-icon" @click="to(-1)"><arrow-left-bold /></el-icon>
        <el-icon class="to-icon" @click="to(1)"><arrow-right-bold /></el-icon>
      </div>
      <div class="search">
        <el-input
          class="search-input"
          v-model="searchInput"
          placeholder="搜索"
          clearable
        >
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </div>
    </div>
    <div class="right">
      <span
        class="theme-icon"
        v-if="themeType == 'dark'"
        @click="change('light')"
        >🌞</span
      >
      <span
        class="theme-icon"
        v-if="themeType == 'light'"
        @click="change('dark')"
        >🌚</span
      >

      <el-avatar class="avatar" :src="avatarUrl"></el-avatar>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const state = reactive({
      isLight: true,
      searchInput: "",
      themeType: "light",
      avatarUrl:
        "https://p3.music.126.net/grS1FuIWmPY9wmKFRpBT2Q==/1378787587205708.jpg",
      //   avatarUrl:
      //     "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    });

    const router = useRouter();
    const route = useRoute();

    // 监听路由变化
    // router.beforeEach(() => {
    //   console.log("bbbbbbbbbbbbbb");
    // });
    // router.afterEach(() => {
    //   console.log("ffffffffffffffff");
    // });

    onMounted(() => {
      // 初始亮色
      document.body.setAttribute("data-user-color-scheme", state.themeType);
    });
    function to(params) {
      router.go(params);
      console.log("params: ", route);
    }
    function change(params) {
      state.themeType = params;
      document.body.setAttribute("data-user-color-scheme", params);
    }
    return {
      change,
      to,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .to {
      .to-icon {
        cursor: pointer;
        padding: 10px;
        background: rgba($color: #aaaaaa, $alpha: 0.1);
        border-radius: 50%;
        margin-left: 30px;
        color: var(--text-sub-color);
        font-size: 20px;
        transition: all ease 0.3s;
        // &.disable {
        //   color: rgba($color: #aaaaaa, $alpha: 0.3);
        //   cursor: not-allowed;
        // }
        &:hover {
          background: rgba($color: #aaaaaa, $alpha: 0.2);
          transition: all ease 0.3s;
        }
      }
      margin-right: 100px;
    }
    .search {
      .search-input {
        .el-input__inner {
          //   background: rgba($color: #aaa9a9, $alpha: 0.1) !important;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .theme-icon {
      font-size: 24px;
      cursor: pointer;
    }
    .avatar {
      margin-left: 30px;
      cursor: pointer;
    }
  }
}
</style>

<style>
/* // 重置样式 */
.search-input.el-input .el-input__inner {
  background: rgba(170, 170, 170, 0.1);
  border: none;
  border-radius: 30px;
  padding: 0 30px 0 40px;
}
.search-input.el-input .el-input__icon {
  width: 40px;
}
</style>
