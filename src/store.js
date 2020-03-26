
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      dialog: '',
      userHeaders: ['name', 'service', 'address', 'parties','county','hearing','status','action', 'message', 'case-view'],
      tasks: [
        {
          title: 'Post-Court Assessment',
          subtitle: 'complete post-court assessment',
          status: 'completed',
          priority: 'Medium',
          created: {
              date: '01/11/2020',
              time: '1:23 PM',
          },
          due: {
              date: '01/13/2020',
              time: '8:23 AM',
          }
        },
        {
          title: 'Post-Court Assessment',
          subtitle: 'complete post-court assessment',
          status: 'completed',
          priority: 'Low',
          created: {
              date: '01/11/2020',
              time: '1:23 PM',
          },
          due: {
              date: '01/16/2020',
              time: '8:23 AM',
          }
        },
        {
          title: 'Post-Court Assessment',
          subtitle: 'complete post-court assessment',
          status: 'in progress',
          priority: 'High',
          created: {
              date: '02/11/2020',
              time: '1:23 PM',
          },
          due: {
              date: '03/13/2020',
              time: '8:23 AM',
          }
        },
        {
          title: 'Post-Court Assessment',
          subtitle: 'complete post-court assessment',
          status: 'overdue',
          priority: 'High',
          created: {
              date: '01/11/2020',
              time: '1:23 PM',
          },
          due: {
              date: '01/13/2020',
              time: '8:23 AM',
          }
        },
        {
          title: 'Post-Court Assessment',
          subtitle: 'complete post-court assessment',
          status: 'overdue',
          priority: 'High',
          created: {
              date: '01/11/2020',
              time: '1:23 PM',
          },
          due: {
              date: '01/13/2020',
              time: '8:23 AM',
          }
        },
      ],
    },
    getters: {
        dialog: state => state.dialog,
        userHeaders: state => state.userHeaders,
        tasks: state => state.tasks,
        completedTasks: state => {
          return state.tasks.filter(task => task.status === 'completed').length
        },
        incompletedTasks: state => {
          return state.tasks.filter(task => task.status === 'in progress').length
        },
        overdueTasks: state => {
          return state.tasks.filter(task => task.status === 'overdue').length
        },
        allTasks: state => state.tasks.length
    },
    mutations: {
        setDialog(state, dialogValue) {
          state.dialog = dialogValue;
        }
    }
  });