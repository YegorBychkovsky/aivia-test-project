import { createRouter, createWebHashHistory } from "vue-router";
import GameView from "../views/GameView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "game",
    component: GameView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
