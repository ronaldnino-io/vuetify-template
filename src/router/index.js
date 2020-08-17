import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard"
  },
   {
     path: "/login",
     name: "Login",
     component: () => import('@/views/login/Index')
   },
  {
    path: "/",
    component: () => import("@/views/home/Index"),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/Index"),
      },
      {
        path: "/module",
        name: "Modulo",
        component: () => import("@/views/module/Index"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/profile/Index")
      },
      {
        path: "/settings",
        name: "Settings",
        component: () => import("@/views/settings/Index")
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
