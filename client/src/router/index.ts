import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/poll/:id',
    name: 'Poll',
    component: () => import(/* webpackChunkName: "Poll" */'../views/Poll/Poll.vue'),
  },
  {
    path: '/poll/:id/answer',
    name: 'Chart',
    component: () => import(/* webpackChunkName: "Chart" */'../views/Chart/Chart.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
