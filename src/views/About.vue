<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, getCurrentInstance } from "vue";
export default {
  setup() {
    const state = reactive({ data: {} });
    const { proxy } = getCurrentInstance();
    const getDetail = async (data) => {
      proxy.$Api
        .search(data)
        .then((res) => {
          console.log("data1111111111111111: ", res.result.songs);
          state.data = res.result;
          return res.result;
        })
        .then((res) => {
          console.log("res3333333333333333333: ", res);
        });
    };

    onMounted(() => {
      getDetail({ keywords: "海阔天空" });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
