<template>
  <div class="cont">
    <!-- <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view> -->
    <SearchBar class="search-box"></SearchBar>
    <div class="cont-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import SearchBar from "@/components/SearchBar.vue";
// import { useRoute } from "vue-router";
export default {
  components: { SearchBar },
  setup() {
    // const route = useRoute();
    onMounted(() => {
      //   console.log("routeccccccccccccc: ", route);
    });
  },
};
</script>

<style lang="scss" scoped>
.cont {
  .search-box {
    height: 100px;
    backdrop-filter: saturate(100%) blur(40px);
    position: fixed;
    top: 0;
    left: 250px;
    right: 0;
  }

  .cont-box {
    padding-top: 120px;
  }
}
</style>
