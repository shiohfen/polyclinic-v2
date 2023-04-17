import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',

    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/staffdashboard',
    name: 'staffdashboard',

    component: () => import(/* webpackChunkName: "about" */ '../views/Staff/Dashboard.vue')
  },
  {
    path: '/doctordashboard',
    name: 'doctordashboard',

    component: () => import(/* webpackChunkName: "about" */ '../views/Doctor/Dashboard.vue')
  },
  {
    path: '/reports',
    name: 'reports',

    component: () => import(/* webpackChunkName: "about" */ '../components/Staff/Reports/YearlyReport.vue')
  },
  {
    path: '/clinicdetails',
    name: 'clinicdetails',

    component: () => import(/* webpackChunkName: "about" */ '../components/Staff/ClinicDetails.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
