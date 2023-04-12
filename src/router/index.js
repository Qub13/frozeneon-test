import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    component: HomeView
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
