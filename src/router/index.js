import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/views/HomeView.vue"; // Import your components

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
