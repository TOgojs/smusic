<template>
  <div>
    <!-- <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
// import { useRoute } from "vue-router";
export default {
  setup() {
    // const route = useRoute();
    onMounted(() => {
      //   console.log("routeccccccccccccc: ", route);
    });
  },
};
</script>

<style></style>
