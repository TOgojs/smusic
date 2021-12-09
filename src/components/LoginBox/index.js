import { createVNode, render } from "vue";
import MyConfirm from "./LoginBox.vue";

const div = document.createElement("div");
div.setAttribute("class", "my-confirm-out");
document.body.appendChild(div);

export default ({ title, text }) => {
  //   return new Promise((resolve, reject) => {
  // 点击确定按钮
  const submitCallback = () => {
    render(null, div);
    // resolve();
  };
  // 点击取消按钮
  const cancelCallback = () => {
    render(null, div);
    // reject(new Error("点击取消"));
  };
  // 1. 渲染组件
  // 2. 点击确认按钮，触发resolve同时销毁组件
  // 3. 点击取消按钮，触发reject同时销毁组件
  const vnode = createVNode(MyConfirm, {
    title,
    text,
    submitCallback,
    cancelCallback,
  });
  render(vnode, div);
  //   });
};
