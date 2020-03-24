import Vue from 'vue'
import VueRouter from  'vue-router'
import Main from '@/components/pages/Main.vue'
import CaseView from '@/components/pages/CaseView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: '/case-view',
    name: 'case-view',
    component: CaseView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router