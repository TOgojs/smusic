import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { randomCNIp } from "@/utils/index";
import { useLocalStorage, useBrowserLocation } from "@vueuse/core";

// 全局引入
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIconModules from "@element-plus/icons";

const app = createApp(App);

// 引入全局icon
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
}

app.use(ElementPlus).use(store).use(router);

// 引入全局登录
import LoginBox from "@/components/LoginBox/index";
app.config.globalProperties.$LoginBox = LoginBox;

router.isReady().then(() => {
  app.mount("#app");
});

// 挂载全局 Api
import Api from "@/api/api";
app.config.globalProperties.$Api = Api;
// 用法
// const { proxy } = getCurrentInstance();
// proxy.$Api
//         .search(data)
//         .then((res) => {
//           console.log("data1111111111111111: ", res.result.songs);
//           return res.result;
//         })

// 生成本地ip
let localIp = randomCNIp();
useLocalStorage("localIp", localIp);
const location = useBrowserLocation();
console.log("location: ", location);

// 默认亮暗
useLocalStorage("themeType", "light");
