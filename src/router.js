import Vue from 'vue'
import VueRouter from  'vue-router'
import Main from '@/components/views/Main.vue'
import CaseView from '@/components/views/CaseView.vue'
import Overview from '@/components/views/CaseViewSubViews/Overview.vue'
import Documents from '@/components/views/CaseViewSubViews/Documents.vue'
import Requests from '@/components/views/CaseViewSubViews/Requests.vue'
import Tasks from '@/components/views/CaseViewSubViews/Tasks.vue'


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
    component: CaseView,
    children: [
      //allows for the subviews
      {
        path: '',
        component: Overview,
      },
      {
        path: 'documents',
        component: Documents,
      },
      {
        path: 'requests',
        component: Requests,
      },
      {
        path: 'tasks',
        component: Tasks,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router