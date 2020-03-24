
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      dialog: '',
      userHeaders: ['name', 'service', 'address', 'parties','county','hearing','status','action', 'message', 'case-view']
    },
    getters: {
        dialog: state => state.dialog,
        userHeaders: state => state.userHeaders,
    },
    mutations: {
        setDialog(state, dialogValue) {
          state.dialog = dialogValue;
        }
    }
  });