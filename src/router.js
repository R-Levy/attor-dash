import Vue from 'vue'
import VueRouter from  'vue-router'
import Main from '@/components/views/Main.vue'
import Profile from '@/components/views/Profile.vue'
import Login from '@/components/views/Login.vue'
import Register from '@/components/views/Register.vue'
import DocumentReview from '@/components/views/DocumentReview.vue'
import CaseView from '@/components/views/CaseView.vue'
import AttorneyTasks from '@/components/views/AttorneyTasks.vue'
import Overview from '@/components/views/CaseViewSubViews/Overview.vue'
import Documents from '@/components/views/CaseViewSubViews/Documents.vue'
import Requests from '@/components/views/CaseViewSubViews/Requests.vue'
import Tasks from '@/components/views/CaseViewSubViews/Tasks.vue'
import { store } from './store'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/tasks",
    name: "attorney-tasks",
    component: AttorneyTasks
  },
  {
    path: "/document-review",
    name: "document-review",
    component: DocumentReview
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
    ],
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

//check for unauthorized access
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    console.log('routerloggedin', store.getters.isLoggedIn)
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router