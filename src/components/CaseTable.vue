<template>
<div>
    <v-data-table
      :headers="computedHeaders"
      :items="cases"
      :search="search"
      class="cell-height"
    >
    <template v-slot:item.case-view>
      <v-btn x-small rounded depressed color="primary" :to="{path: 'case-view'}">view</v-btn>
    </template>

    <template v-slot:item.message>
      <v-btn x-small icon color="accent"><v-icon>$email</v-icon></v-btn>
    </template>

    <template v-slot:item.parties={item}>
      <div>{{item.parties.defendant}} vs. {{item.parties.plaintiff}}</div>
      <div class="accent--text">{{item.parties.docketNo}}</div>
    </template>

    <template v-slot:item.status={item}>
      <div>{{item.status.status}}</div>
      <div class="lighter-blue">{{item.status.date}}</div>
    </template>

    <template v-slot:item.action={item}>
      <div><a href="#" @click="actionDecision(item.action.action)">{{item.action.action}}</a></div>
      <div><a href="#" @click="actionDecision(item.action.action2)">{{item.action.action2}}</a></div>
      <div class="lighter-blue">Due: {{item.action.date}}</div>

      <v-dialog
      v-model="dialogOpen" value="''"
      max-width="500"
    >
      <component :is="dynamicDialog" @change:dialog="changeDialog" :clientName="item.name"></component>
    </v-dialog>
    </template>
    </v-data-table>

</div>
</template>

<script>
import AcceptDialog from '@/components/dialogs/AcceptDialog'
import DeclineDialog from '@/components/dialogs/DeclineDialog'
export default {
    name: 'case-table',
    components: {
      AcceptDialog,
      DeclineDialog,
    },
    data () {
      return {
        search: '',
        headers: [
           {
            text: 'Client',
            value: 'name',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '10%'
          },
          {
            text: 'Service Requested',
            value: 'service',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '5%'
          },
          {
            text: 'Address',
            value: 'address',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: false,
            width:'20%'
          },
          {
            text: 'Parties',
            value: 'parties',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: false,
            width: '25%'
          },
          {
            text: 'County',
            value: 'county',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '4%'
          },
          {
            text: 'Hearing',
            value: 'hearing',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '5%'
          },
          {
            text: 'Status',
            value: 'status',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '20%',
            sortable: false,
          },
          {
            text: 'Action',
            value: 'action',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: false,
            width: '10%'
          },
          {
            text: 'Message',
            value: 'message',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
            width: '5%'
          },
          {
            text: 'Case',
            value: 'case-view',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
            width: '5%'
          },
        ],
        dialogName: '',
        dialogOpen: false,
      }
    },
    mounted (){
    this.$store.dispatch('loadCases')
  },
    computed: {
    userHeaders(){
      return  this.$store.getters.userHeaders
    },
    cases(){
      return  this.$store.getters.cases
    },
   computedHeaders(){
      return this.headers.filter(header => this.userHeaders.includes(header.value))  
   },
   dynamicDialog(){
     switch(this.dialogName){
       case 'accept-dialog':
         return 'accept-dialog'
      case 'decline-dialog':
         return 'decline-dialog'
        default:
          return ''
     }
   }
   
  },
  methods: {
     actionDecision(action){
       switch(action){
         case 'Accept Case':
           console.log(action)
           this.dialogName = 'accept-dialog'
           this.dialogOpen = true
           break
          case 'Decline Case':
           console.log(action)
           this.dialogName = 'decline-dialog'
           this.dialogOpen = true
           break
          default:
            console.log('default')
       }
     },
     changeDialog(dialogName){
        window.console.log(dialogName)
        this.$store.commit('setDialog', dialogName)
        this.dialogOpen = false
      }
   }
}
</script>

<style>
.v-data-table td{
    padding: 20px 16px;
}
</style>