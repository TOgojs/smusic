<template>
  <el-button type="" @click="logout">退出</el-button>
  <el-button type="" @click="login">登录</el-button>
  <el-button type="" @click="logState">状态查询</el-button>
  <div>
    <!-- {{ data }} -->
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, getCurrentInstance } from "vue";

export default {
  setup() {
    const state = reactive({ data: {} });
    const { proxy } = getCurrentInstance();
    const getDetail = (data) => {
      proxy.$Api.search(data).then((res) => {
        //   console.log("data1111111111111111: ", res.result.songs);
        state.data = res.result;
        return res.result;
      });
      // .then((res) => {
      // //   console.log("res3333333333333333333: ", res);
      // });
    };

    function logout() {
      proxy.$Api.logout().then((res) => {
        console.log("ooooooo: ", res);
      });
    }
    function login() {
      let obj = {
        phone: "18599181556",
        md5_password: "d03c25624b53c0c3b32796b4dd7d1e3a",
      };
      proxy.$Api.loginCellphone(obj).then((res) => {
        console.log("iiiiiiiii: ", res);
      });
    }

    function logState() {
      //   proxy.$Api.logout().then((res) => {
      //     console.log("ooooooo: ", res);
      //   });
      proxy.$Api.loginStatus().then((res) => {
        console.log("sssssssssssss: ", res);
      });
    }
    onMounted(() => {
      getDetail({ keywords: "海阔天空" });
    });

    return {
      logout,
      login,
      logState,
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
