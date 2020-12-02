import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/my-people',
    name: 'my-people',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mypeople" */ '../views/MyPeople.vue')
  },
  // {
  //   path: '/my-people/:name',
  //   name: 'friend',
  //   component: () => import('../views/Friend.vue')
  // },
  // {
  //   path: '/blog',
  //   name: 'blog',
  //   component: () => import('../views/Blog.vue')
  // },
  // {
  //   path: '/blog/:title',
  //   name: 'post',
  //   component: () => import('../views/Post.vue')
  // },
  {
    path: '/about-me',
    name: 'about-me',
    component: () => import('../views/AboutMe.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
