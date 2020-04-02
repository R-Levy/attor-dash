
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      dialog: '',
      userHeaders: ['name', 'service', 'address', 'parties','county','hearing','status','action', 'message', 'case-view'],
      cases: [],
      tasks: [],
      attorney: {
        attorneyId: 31,
      }
    },
    getters: {
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
        loadCases ({commit, getters}){
          axios
            .get('http://localhost:3333/getCases',{
              params: {
                attorneyId: getters.attorney.attorneyId
              }
            })
            .then(r => r.data)
            .then(data =>{
              commit('set_cases', data.cases)
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