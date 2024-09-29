// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login/Login.vue";
import Camera from "../components/camera.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/camera",
    name: "Camera",
    component: Camera,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
