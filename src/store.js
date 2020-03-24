
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      dialog: '',
    },
    getters: {
        dialog: state => state.dialog,
    },
    mutations: {
        setDialog(state, dialogValue) {
          state.dialog = dialogValue;
        }
    }
  });