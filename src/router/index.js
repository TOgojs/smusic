import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/find",
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/hot",
    name: "Hot",
    component: () => import(/* webpackChunkName: "hot" */ "../views/Hot.vue"),
  },
  {
    path: "/find",
    name: "Find",
    component: () => import(/* webpackChunkName: "find" */ "../views/Find.vue"),
  },
  {
    path: "/video",
    name: "Video",
    component: () =>
      import(/* webpackChunkName: "video" */ "../views/Video.vue"),
  },
  {
    path: "/library",
    name: "Library",
    component: () =>
      import(/* webpackChunkName: "library" */ "../views/Library.vue"),
  },
  {
    path: "/record",
    name: "Record",
    component: () =>
      import(/* webpackChunkName: "record" */ "../views/Record.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
