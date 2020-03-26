import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/styles.sass'
import Tasks from '@/components/icons/Tasks.vue'
import Settings from '@/components/icons/Settings.vue'
import Calendar from '@/components/icons/Calendar.vue'
import Email from '@/components/icons/Email.vue'
import Invoices from '@/components/icons/Invoices.vue'
import Megaphone from '@/components/icons/Megaphone.vue'
import SearchFolder from '@/components/icons/SearchFolder.vue'
import Form from '@/components/icons/Form.vue'
import Bank from '@/components/icons/Bank.vue'
import DocumentFolder from '@/components/icons/DocumentFolder.vue'
import Download from '@/components/icons/Download.vue'


Vue.use(Vuetify);

export default new Vuetify({
        theme: {
          themes: {
            light: {
              primary: '#4DCCC4',
              secondary: '#003A60',
              accent: '#F86624',
              info: '#AFC2CE',
              blueish: '#45677d',
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
              megaphone: { 
                component: Megaphone, 
              },
              searchFolder: { 
                component: SearchFolder, 
              },
              bank: { 
                component: Bank, 
              },
              form: { 
                component: Form, 
              },
              documentFolder: { 
                component: DocumentFolder, 
              },
              download: { 
                component: Download, 
              },
            },
          },
});
