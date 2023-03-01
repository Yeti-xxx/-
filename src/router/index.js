import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/course",
    name: "Course",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Course.vue"),
  },
  {
    path: "/course-info/:id",
    name: "CourseInfo",
    component: () =>
      import(/* webpackChunkName: "CourseInfo" */ "../views/CourseInfo.vue"),
  },
  {
    path:'/login',
    name:'Login',
    component:()=>
      import('../views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;