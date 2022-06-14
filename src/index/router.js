
import Home from './views/Home.vue'

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Posts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  const toPath = to.path;
  const fromPath = from.path;
  console.log(fromPath)
  console.log(toPath)
  next()
});

router.onError((err) => {
  console.log(err)
})

export default router
