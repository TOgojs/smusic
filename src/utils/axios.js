import axios from "axios";
// import { randomCNIp } from "./index";
import { useLocalStorage } from "@vueuse/core";

axios.defaults.baseURL =
  "https://netease-cloud-music-api-three-ebon.vercel.app";
axios.defaults.withCredentials = true;
axios.interceptors.response.use((res) => {
  if (res.data.code != 200) {
    return Promise.reject(res.data);
  }
  return res.data;
});

// let ip = randomCNIp();
export default {
  get(url, params) {
    if (!params) {
      params = {};
    }
    params["realIP"] = useLocalStorage("localIp").value;
    params["timestamp"] = Date.now();
    return new Promise((resolve) => {
      axios({
        method: "get",
        params,
        url,
      })
        .then((res) => {
          console.log("res: ", res);
          resolve(res);
        })
        .catch((res) => {
          resolve(res);
          console.log("err: ", res);
        });
    });
  },
};
