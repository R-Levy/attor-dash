<template>
<div>
    <v-data-table
      :headers="headers"
      :items="tasks"
      :search="search"
    >
    <template v-slot:body="{ items }">
    <tbody>
      <tr v-for="item in items" :key="item.name" @mouseenter="hover = item.taskId" @mouseleave="hover = -1">
        <td>
            <div class="secondary--text font-weight-bold">{{item.subject}}</div>
            <div class="">{{item.description}}</div>
            <a v-if="hover === item.taskId" class="accent--text small-font mr-2">view</a>  
            <a v-if="hover === item.taskId" class="accent--text small-font mr-2">edit</a>  
            <a v-if="hover === item.taskId" class="accent--text small-font mr-2">log time</a>
      </td>
      <td>
          <v-chip :color="statusColor(item.status)" :outlined="item.status==='in progress'" dark>{{item.status}}</v-chip>
      </td>
      <td>
          <span class="pr-4"><v-icon :color="priorityColor(item.priority)" small>mdi-circle</v-icon></span> {{item.priority}}
      </td>
      <td>
        <div class="secondary--text font-weight-bold">{{fixDate(item.created_at)}}</div>
      </td>
        <td>
          <div class="secondary--text font-weight-bold">{{fixDate(item.due_at)}}</div>
        </td>
        <td>
          <div class="secondary--text font-weight-bold">{{item.docket}}</div>
        </td>
        <td>
          <v-btn icon color="accent" v-if="hover === item.taskId" @click="deleteTask(item.taskId)"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
        </td>
        
      </tr>
    </tbody>
</template>
    </v-data-table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'task-table',
    data () {
      return {
        c_index:-1,
        hover: false,
        search: '',
        headers: [
          {
            text: 'Tasks',
            value: 'tasks',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: false,
          },
          {
            text: 'Status',
            value: 'status',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: true,
          },
          {
            text: 'Priority',
            value: 'priority',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: true,
          },
          {
            text: 'Created',
            value: 'created',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: true,
          },
          {
            text: 'Due Date',
            value: 'due',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
          },
          {
            text: 'Case',
            value: 'case',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
          },
          {
            value: 'actions',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '.1%',
            sortable: false
          },

        ],
      }
    },
    mounted(){
      this.$store.dispatch('loadTasks')
    },
    computed: {
      tasks(){
        return this.$store.getters.tasks
      }
      
    },
    methods: {
        priorityColor(type) {
            switch (type){
                case 'High':
                    return 'red'
                case 'Medium':
                    return 'primary'
                case 'Low':
                    return 'yellow'
                default:
                    return 'secondary'
            }
        },
        statusColor(status){
          switch (status){
                case 'overdue':
                    return 'red'
                default:
                    return 'primary'
        }
        },
      fixDate(date){
          var d = new Date(Date.parse(date)).toLocaleDateString();
          return d
      },
       deleteTask(taskId){
         console.log(taskId)
        axios
          .delete('http://localhost:3333/tasks', {
            params: {
              taskId: taskId,
            }
          })
          .then(() => this.$store.dispatch('loadTasks'))
      }
      },
    }
</script>

<style>
</style>