<template>
  <div class="side">
    <div class="item" v-for="(item, index) in menu" :key="index">
      <div class="title">{{ item.title }}</div>
      <div
        :class="['link', isActive(one.name) == true ? 'active' : '']"
        @click="toPage(one)"
        v-for="(one, oindex) in item.children"
        :key="oindex"
      >
        <el-icon class="icon"><component :is="one.icon" /></el-icon>
        <div class="name">{{ one.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
const list = [
  {
    title: "推荐",
    children: [
      { title: "发现", name: "find", icon: "bell-filled" },
      { title: "视频", name: "video", icon: "bell-filled" },
      { title: "热门", name: "hot", icon: "bell-filled" },
      { title: "关于", name: "about", icon: "briefcase" },
    ],
  },
  {
    title: "我的",
    children: [
      { title: "乐库", name: "Library", icon: "bell-filled" },
      { title: "最近播放", name: "record", icon: "briefcase" },
    ],
  },
];
export default {
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();

    const data = reactive({ menu: list });

    function toPage(params) {
      //   console.log("params: ", params);
      router.push(params.name);
    }
    function isActive(params) {
      let name = route.path.slice(1, route.path.length);
      if (params == name) {
        return true;
      } else {
        return false;
      }
    }

    // 根据路由判断选中
    onMounted(() => {});

    return {
      toPage,
      isActive,
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
.side {
  padding: 50px;
  .item {
    margin-top: 60px;
    &:first-of-type {
      margin-top: 20px;
    }
    .title {
      color: var(--text-sub-color);
      font-size: 15px;
    }
    .link {
      cursor: pointer;
      font-size: 16px;
      margin-top: 30px;
      display: flex;
      align-items: center;
      color: var(--text-color);
      .icon {
        font-size: 20px;
      }
      .name {
        margin-left: 12px;
      }

      &.active {
        color: var(--text-active-color);
        // .icon {
        //   color: red;
        // }
        // .name {
        //   color: red;
        // }
      }
    }
  }
}
</style>
