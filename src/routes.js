import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Departement.vue"),
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("./pages/Departement.vue"),
  },
  {
    path: "/adddep",
    name: "AddDep",
    component: () => import("./pages/AddDepartement.vue"),
  },
  {
    path: "/courses/:id",
    name: "UpdateDep",
    component: () => import("./pages/UpdateDepartement.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
