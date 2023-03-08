import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue'
import { useUserStore } from "../store/user";
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
    path: '/login',
    name: 'Login',
    component: () =>
      import('../views/Login.vue')
  },
  {
    path: '/course-play/:courseId/:chapterId',
    name: 'course-play',
    component: () =>
      import(/* webpackChunkName: "CoursePlay" */ "../views/CoursePlay.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
    beforeEnter: (to, from, next) => {
      if (useUserStore().userInfo.id) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: "/confirmOrder",
    name: "ConfirmOrder",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/ConfirmOrder.vue"),
    beforeEnter: (to, from, next) => {
      if (useUserStore().userInfo.id) {
        next()
      } else {
        next('/login')
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;