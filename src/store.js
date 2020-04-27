
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      status: '',
      token: localStorage.getItem('acc_token') || '',
      dialog: '',
      userHeaders: ['name', 'service', 'address', 'parties','county','hearing','status','action', 'message', 'case-view'],
      cases: [],
      tasks: [],
      attorney: {
      }
    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
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
              console.log('auth_token', token)
              localStorage.setItem('acc_token', JSON.stringify(token))
              console.log(localStorage.getItem('acc_token'))
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', {token, user})
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('acc_token')
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
              localStorage.setItem('acc_token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', {token, user})
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              localStorage.removeItem('acc_token')
              reject(err)
            })
          })
        },

        logout({commit}){
          return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('acc_token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
          })
        },

        loadCases ({commit, getters}){
          axios
            .get('http://localhost:3333/getCases',{
              params: {
                attorneyId: getters.attorney.AttorneyId
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
              attorneyID: getters.attorney.AttorneyId
            }
          })
            .then(r => r.data)
            .then(data =>{
              commit('set_tasks', data)
            })
        },

        loadUser({commit, getters}){
          if(localStorage.getItem('acc_token') === null){
            console.log('it is null')
          }
          else{
            const authToken = JSON.parse(localStorage.getItem('acc_token'))
            axios.defaults.headers.common['Authorization'] = `Bearer ${authToken.token}`
          }
            axios
            .get('http://localhost:3333/auth/user')
            .then(r => r.data)
            .then(data =>{
              commit('set_user', data)
            })
            .then(()=>{
              if (getters.cases.length === 0){
                this.dispatch('loadCases')
              }
            })
        }
    },

    mutations: {
      //mutations for authorization
        auth_request(state){
          state.status = 'loading'
        },
        auth_success(state, {token, user}){
          state.status = 'success'
          state.token = token
          state.attorney = user
        },
        auth_error(state){
          state.status = 'error'
        },

        set_user(state, user){
          state.attorney = user
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