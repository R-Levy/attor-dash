import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Tasks from '@/components/icons/Tasks.vue'

Vue.use(Vuetify);

export default new Vuetify({
        theme: {
          themes: {
            light: {
              primary: '#4DCCC4',
              secondary: '#003A60',
              accent: '#F86624',
              info: '#AFC2CE',
            },
          },
        },
        icons: {
            values: {
              tasks: { // name of our custom icon
                component: Tasks, // our custom component
              },
            },
          },
});
