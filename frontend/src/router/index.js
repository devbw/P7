import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/user/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: '/user/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/user/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/account',
    name: 'Delete',
    component: () => import(/* webpackChunkName: "post" */ '../views/Delete.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/user/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/single/:id',
    name: 'Single',
    component: () => import(/* webpackChunkName: "post" */ '../views/Single.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/user/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: () => import(/* webpackChunkName: "post" */ '../views/AdminView.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/user/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/admin-delete',
    name: 'AdminDelete',
    component: () => import(/* webpackChunkName: "post" */ '../views/AdminDelete.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/user/login");
      } else {
        next();
      }
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
