<template>关于</template>

<script>
import axios from "@/utils/axios";
import { onMounted, reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({ data: {} });
    const getDetail = (id) => {
      axios.get(`/search?keywords=${id}`).then((res) => {
        console.log("res: ", res);
      });
    };

    onMounted(() => {
      getDetail("海阔天空");
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
