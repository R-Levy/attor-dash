<template>
    <div class="mt-0">
        <v-container fluid>
            <v-row>
                <v-col v-for="card in cards" :key="card.title">
                    <v-card class="pa-6 rounded-card accent--text">
                        <span :class="{'secondary--text': card.title !== 'overdue'}" class="display-1 font-weight-medium px-3">{{calculateTasks(card.title)}}</span>
                        <span :class="{'info--text': card.title !== 'overdue'}" class="custom-overline font-weight-medium px-3">{{card.title}}</span>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <table-template :rounded="true" :filter-area-button="'add'" :add-type="'addTask'">
        <template #data><task-table /></template>
        </table-template>

        <!-- this is the dialog that will pop up if add filter button is pressed -->
    <v-dialog
      v-model="addTaskDialogOpen" value="''"
      max-width="500"
    >
      <add-task-dialog @change:dialog="changeDialog"/>
    </v-dialog>
    </div>
</template>

<script>
import TaskTable from '@/components/TaskTable'
import TableTemplate from '@/components/TableTemplate'
import AddTaskDialog from '@/components/dialogs/AddTaskDialog'

export default {
    name: 'tasks',
    components: {
        TaskTable,
        TableTemplate,
        AddTaskDialog,
    },
    data() {
        return{
            cards: [
                {
                    title: 'all',
                    number: this.$store.getters.allTasks,
                },
                {
                    title: 'completed',
                    number: this.$store.getters.completedTasks,
                },
                {
                    title: 'incomplete',
                    number: this.$store.getters.incompletedTasks,
                },
                {
                    title: 'overdue',
                    number: this.$store.getters.overdueTasks,
                }
            ]
        }
    },
    methods:{
      changeDialog(dialogName){
        this.$store.commit('setDialog', dialogName)
      },
      calculateTasks(task){
          switch(task){
            case 'incomplete':
                  return this.$store.getters.incompletedTasks
            case 'completed':
                  return this.$store.getters.completedTasks
            case 'overdue':
                  return this.$store.getters.overdueTasks
            case 'all':
                  return this.$store.getters.allTasks
            default:
                return 2
          }
      }
    },
    computed: {
     addTaskDialogOpen: {
        get () {
          return this.$store.getters.dialog === 'addTaskDialog'
        },
        set (value) {
          this.changeDialog(value)
        },
    
      },
  }
    }
</script>

<style>
</style>