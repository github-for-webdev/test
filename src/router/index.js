import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/views/HomePage.vue";
import DagestanPage from "@/views/DagestanPage.vue";
import TeriberkaPage from "@/views/TeriberkaPage.vue";
import ElbrusPage from "@/views/ElbrusPage.vue";
import СrimeaPage from "@/views/СrimeaPage.vue";
import PolarPage from "@/views/PolarPage.vue";
import AltayPage from "@/views/AltayPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/dagestan",
    component: DagestanPage,
  },
  {
    path: "/teriberka",
    component: TeriberkaPage,
  },
  {
    path: "/elbrus",
    component: ElbrusPage,
  },
  {
    path: "/crimea",
    component: СrimeaPage,
  },
  {
    path: "/polar",
    component: PolarPage,
  },
  {
    path: "/altay",
    component: AltayPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
