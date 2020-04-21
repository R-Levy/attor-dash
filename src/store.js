
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      status: '',
      token: localStorage.getItem('token') || '',
      dialog: '',
      userHeaders: ['name', 'service', 'address', 'parties','county','hearing','status','action', 'message', 'case-view'],
      cases: [],
      tasks: [],
      attorney: {
        attorneyId: 31,
      }
    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
        dialog: state => state.dialog,
        userHeaders: state => state.userHeaders,
        tasks: state => state.tasks,
        cases: state => state.cases,
        completedTasks: state => {
          return state.tasks.filter(task => task.status === 'completed').length
        },
        incompletedTasks: state => {
          return state.tasks.filter(task => task.status === 'in progress').length
        },
        overdueTasks: state => {
          return state.tasks.filter(task => task.status === 'overdue').length
        },
        allTasks: state => state.tasks.length,
        attorney: state => state.attorney
    },

    actions: {
        login ({commit}, user){
          return new Promise((resolve, reject) =>{
            commit('auth_request')
            axios({url: 'http://localhost:3333/auth/login', data: user, method: 'POST'})
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
          })
        },

        register({commit}, user){
          return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({url: 'http://localhost:3333/auth/register', data: user, method: 'POST'})
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              localStorage.removeItem('token')
              reject(err)
            })
          })
        },

        logout({commit}){
          return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
          })
        },

        loadCases ({commit, getters}){
          axios
            .get('http://localhost:3333/getCases',{
              params: {
                attorneyId: getters.attorney.attorneyId
              }
            })
            .then(r => r.data)
            .then(data =>{
              commit('set_cases', data)
            })
        },

        loadTasks ({commit, getters}){
          axios
            .get('http://localhost:3333/getTasks',{
              params: {
              attorneyID: getters.attorney.attorneyId
            }
          })
            .then(r => r.data)
            .then(data =>{
              console.log(data)
              commit('set_tasks', data)
            })
        }
    },

    mutations: {
      //mutations for authorization
        auth_request(state){
          state.status = 'loading'
        },
        auth_success(state, token, user){
          state.status = 'success'
          state.token = token
          state.attorney = user
        },
        auth_error(state){
          state.status = 'error'
        },
        logout(state){
          state.status = ''
          state.token = ''
        },

        // mutations for application
        setDialog(state, dialogValue) {
          state.dialog = dialogValue;
        },
        set_cases(state, cases){
          state.cases = cases
        },
        set_tasks(state, tasks){
          state.tasks = tasks
        }
    }
  });