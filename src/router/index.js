import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "Categories" */ '@/views/Categories.vue'),
  },
  {
    path: '/',
    name: 'People',
    component: () => import(/* webpackChunkName: "People" */ '@/views/People.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
