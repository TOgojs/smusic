import axios from "@/utils/axios";

const Api = {
  // 登录--------
  // 手机登录
  loginCellphone: (data) => axios.get(`/login/cellphone`, data),
  // 登录状态
  logout: (data) => axios.get(`/logout`, data),
  // 退出
  loginStatus: (data) => axios.get(`/login/status`, data),

  // 搜索--------
  search: (data) => axios.get(`/search`, data),
};

export default Api;
