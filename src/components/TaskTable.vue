<template>
<div>
    <v-data-table
      :headers="headers"
      :items="tasks"
      :search="search"
    >
    <template v-slot:item.tasks={item}>
      <div class="secondary--text font-weight-bold">{{item.title}}</div>
      <div class="caption">{{item.subtitle}}</div>
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">view</router-link>  
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">edit</router-link>  
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">log time</router-link>
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">update status</router-link>
    </template>

    <template v-slot:item.status={item}>
      <v-chip :color="statusColor(item.status)" :outlined="item.status==='in progress'" dark>{{item.status}}</v-chip>
    </template>

    <template v-slot:item.priority={item}>
        <span class="pr-4"><v-icon :color="priorityColor(item.priority)" small>mdi-circle</v-icon></span> {{item.priority}}
    </template>

    <template v-slot:item.created={item}>
      <div class="secondary--text font-weight-bold">{{item.created.date}}</div>
      <div class="caption">{{item.created.time}}</div>
    </template>

    <template v-slot:item.due={item}>
      <div class="secondary--text font-weight-bold">{{item.due.date}}</div>
    </template>
    
    </v-data-table>
</div>
</template>

<script>
export default {
    name: 'task-table',
    data () {
      return {
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

        ],
      }
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
      },
    }
</script>

<style>
</style>