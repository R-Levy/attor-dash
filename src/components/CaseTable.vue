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
      <div>{{item.parties.parties}}</div>
      <div class="accent--text">{{item.parties.docketNo}}</div>
    </template>

    <template v-slot:item.status={item}>
      <div>{{item.status.status}}</div>
      <div class="lighter-blue">{{item.status.date}}</div>
    </template>
    </v-data-table>
</div>
</template>

<script>
export default {
    name: 'case-table',
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
            width: '30%',
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
        cases: [
          {
            name: 'Jane Doe',
            service: 'Full Eviction',
            address: '1124 Somewhere St. City, NJ 123456',
            parties: {
                      parties: 'Black vs. Smith',
                      docketNo: 'LT-505345'
                      },
            county: 'Newark',
            hearing: '3.02.19',
            status: {
                      status:'Filed Complaint and Summons',
                      date: '3.03.20',
                      },
            action: 'Pre-Court Assessment Due: 3.10.20'

          },
        ],
      }
    },
    computed: {
    userHeaders(){
      return  this.$store.getters.userHeaders
    },
   computedHeaders () {
      return this.headers.filter(header => this.userHeaders.includes(header.value))  
   }
}
}
</script>

<style>
.v-data-table td{
    padding: 20px 16px;
}
</style>