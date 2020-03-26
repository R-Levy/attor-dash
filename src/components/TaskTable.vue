<template>
<div>
    <v-data-table
      :headers="headers"
      :items="documents"
      :search="search"
    >
    <template v-slot:item.documentName={item}>
      <div class="secondary--text font-weight-bold">{{item.name}}</div>
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">view</router-link>
    </template>

    <template v-slot:item.status={item}>
      <v-chip color="primary" :outlined="item.status==='in progress'" small>{{item.status}}</v-chip>
    </template>

    <template v-slot:item.priority={item}>
        <span class="pr-4"><v-icon :color="priorityColor(item.priority)" small>mdi-circle</v-icon></span> {{item.priority}}
    </template>

    <template v-slot:item.requested={item}>
      <div class="secondary--text font-weight-bold">{{item.requested.date}}</div>
      <div class="caption">{{item.requested.time}}</div>
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
            text: 'Document Requested',
            value: 'documentName',
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
            text: 'Date Requested',
            value: 'requested',
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
        documents: [
          {
            name: 'Lease Agreement',
            status: 'received',
            priority: 'Medium',
            requested: {
                date: '01/11/2020',
                time: '1:23 PM',
            },
            due: {
                date: '01/13/2020',
                time: '8:23 AM',
            }
          },
          {
            name: 'Photographs of Damage',
            status: 'in progress',
            priority: 'High',
            requested: {
                date: '01/11/2020',
                time: '1:23 PM',
            },
            due: {
                date: '01/13/2020',
                time: '8:23 AM',
            }
          },
          {
            name: 'Ledger',
            status: 'in progress',
            priority: 'Low',
            requested: {
                date: '01/11/2020',
                time: '1:23 PM',
            },
            due: {
                date: '01/13/2020',
                time: '8:23 AM',
            }
          },
          {
            name: 'Ledger',
            status: 'in progress',
            priority: 'Low',
            requested: {
                date: '01/11/2020',
                time: '1:23 PM',
            },
            due: {
                date: '01/13/2020',
                time: '8:23 AM',
            }
          },
        ],
      }
    },
    computed: {
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
        }
    }

}
</script>

<style>
</style>