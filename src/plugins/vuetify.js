import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Tasks from '@/components/icons/Tasks.vue'
import Settings from '@/components/icons/Settings.vue'
import Calendar from '@/components/icons/Calendar.vue'
import Email from '@/components/icons/Email.vue'
import Invoices from '@/components/icons/Invoices.vue'

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
              settings: { 
                component: Settings, 
              },
              calendar: { 
                component: Calendar, 
              },
              email: { 
                component: Email, 
              },
              invoices: { 
                component: Invoices, 
              },
            },
          },
});
