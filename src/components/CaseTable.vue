<template>
<div>
    <v-data-table
      :headers="computedHeaders"
      :items="cases"
      :search="search"
      class="cell-height"
    >
    <template v-slot:item.name={item}>
      <div class="font-weight-medium">{{item.firstname}} {{item.lastname}}</div>
    </template>

    <template v-slot:item.case-view={item}>
      <v-btn x-small rounded depressed color="primary" :to="{path: `case-view/${item.id}`}">view</v-btn>
    </template>

    <template v-slot:item.message>
      <v-btn x-small icon color="accent"><v-icon>$email</v-icon></v-btn>
    </template>

    <template v-slot:item.address={item}>
      <div>{{item.address}}</div>
      <div>{{item.city}}, {{item.state}} {{item.zipcode}}</div>
    </template>

    <template v-slot:item.planDescription={item}>
      <div>{{item.planDescription}}</div>
    </template>

    <template v-slot:item.parties={item}>
      <div>{{item.defendant}} vs. {{item.plaintiff}}</div>
      <div class="accent--text">{{item.docketNo}}</div>
    </template>

    <template v-slot:item.hearingDate={item}>
      <div>{{fixDate(item.hearingDate)}}</div>
    </template>

    <template v-slot:item.status={item}>
      <div>{{item.status}}</div>
      <div class="font-italic" v-if="item.subStatus"> {{item.subStatus}} </div>
      <div class="lighter-blue">{{fixDate(item.statusDate)}}</div>
    </template>

    <template v-slot:item.action={item}>
      <span v-for="action in item.actions" :key="action.actionId">
      <div><a href="#" @click.stop="actionDecision(action, item)">{{action.Name}}</a></div>
      
    </span>

      <!-- <div class="lighter-blue">Due: {{item.action.date}}</div> -->

    </template>
    </v-data-table>
    
      <v-dialog
      v-model="dialogOpen" value="''"
      :max-width="maxWidth"
    >
      <component :is="dynamicDialog" @change:dialog="changeDialog" :dialogCase="dialogCase" :dialogAction="dialogAction"></component>
    </v-dialog>
</div>
</template>

<script>
import AcceptCaseDialog from '@/components/dialogs/AcceptCaseDialog'
import DeclineCaseDialog from '@/components/dialogs/DeclineCaseDialog'
import FileSCDialog from '@/components/dialogs/FileSCDialog'
import EnterCourtInfoDialog from '@/components/dialogs/EnterCourtInfoDialog'
import ReviewConsentDialog from '@/components/dialogs/ReviewConsentDialog'
import FileConsentDialog from '@/components/dialogs/FileConsentDialog'
import EnterCourtResultsDialog from '@/components/dialogs/EnterCourtResultsDialog'
import AskClientforWORDialog from '@/components/dialogs/AskClientforWORDialog'
import FileAdjournmentDialog from '@/components/dialogs/FileAdjournmentDialog'
import AdjournmentCourtResponseDialog from '@/components/dialogs/AdjournmentCourtResponseDialog'
import RequestCourtDismissalDialog from '@/components/dialogs/RequestCourtDismissalDialog'
import NotifyClientofDismissalDialog from '@/components/dialogs/NotifyClientofDismissalDialog'
import FileWORDialog from '@/components/dialogs/FileWorDialog'

export default {
    name: 'case-table',
    components: {
      AcceptCaseDialog,
      DeclineCaseDialog,
      FileSCDialog,
      EnterCourtInfoDialog,
      ReviewConsentDialog,
      FileConsentDialog,
      EnterCourtResultsDialog,
      AskClientforWORDialog,
      FileAdjournmentDialog,
      AdjournmentCourtResponseDialog,
      RequestCourtDismissalDialog,
      NotifyClientofDismissalDialog,
      FileWORDialog,


    },
    props: {
      tableFilters: Object
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
            width: '10%',
            // filter: value => {
            //   console.log(value)
            //   if (!this.tableFilters.nt) return true
            //   return value
            //   //return value.toUpperCase().includes('E')
            // }
          },
          {
            text: 'Service Requested',
            value: 'planDescription',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '5%',
            filter: value => {
              if (!this.tableFilters.Service) return true
              return value.toUpperCase().includes(this.tableFilters.Service.toUpperCase())
            }
          },
          {
            text: 'Address',
            value: 'address',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: false,
            width:'20%',
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
            width: '4%',
            filter: value => {
              if (!this.tableFilters.County) return true
              return value.toUpperCase().includes(this.tableFilters.County.toUpperCase())
            }
          },
          {
            text: 'Hearing',
            value: 'hearingDate',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '5%',
            filter: value => {
              if (!this.tableFilters.Hearing) return true
              return value.includes(this.tableFilters.Hearing)
            }
          },
          {
            text: 'Status',
            value: 'status',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            width: '20%',
            sortable: false,
            filter: value => {
              if (!this.tableFilters.Status) return true
              return value.toUpperCase().includes(this.tableFilters.Status.toUpperCase())
            }
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
        dialogCase: {},
        dialogAction: {},
      }
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
     return this.dialogName
   },
   maxWidth(){
     if (this.dialogName === 'fileSCDialog'){
       return 800
     }
     return 500
   }
   
  },
  methods: {
     actionDecision(action, item){
       this.dialogCase = item
       this.dialogAction = action
       this.dialogName = `${action.Api}Dialog`
       console.log(this.dialogName)
       this.dialogOpen = true

      
     },
     changeDialog(dialogName){
        this.$store.commit('setDialog', dialogName)
        this.dialogOpen = false
      },
      loadCases(){
    this.$store.dispatch('loadCases')
      },
      fixDate(date){
        if (date){
          var d = new Date(Date.parse(date));
          var day = d.getDate()
          var month = d.getMonth()+1 //months are counted starting from 0
          var yr = d.getFullYear()
          return `${month}.${day}.${yr}`
        }
        return ''
      },
   }
}
</script>

<style>
.v-data-table td{
    padding: 20px 16px;
}
</style>