<template>
<div>
    <v-data-table
      :headers="headers"
      :items="cases"
      :search="search"
    >
    <template v-slot:item.case-view>
      <v-btn x-small rounded depressed color="primary">view</v-btn>
    </template>

    <template v-slot:item.message>
      <v-btn x-small icon color="accent"><v-icon>$email</v-icon></v-btn>
    </template>
    </v-data-table>
</div>
</template>

<script>
export default {
    name: 'DataTable',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Client',
            value: 'name',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
          },
          {
            text: 'Service Requested',
            value: 'service',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
          },
          {
            text: 'Address',
            value: 'address',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
          },
          {
            text: 'Parties',
            value: 'parties',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
          },
          {
            text: 'County',
            value: 'county',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
          },
          {
            text: 'Hearing',
            value: 'hearing',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
          },
          {
            text: 'Status',
            value: 'status',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            width: '15%',
            sortable: false,
          },
          {
            text: 'Action',
            value: 'action',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
          },
          {
            text: 'Message',
            value: 'message',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
          },
          {
            text: 'Case',
            value: 'case-view',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
          },
        ],
        cases: [
          {
            name: 'Jane Doe',
            service: 'Full Eviction',
            address: '1124 Somewhere St. \n City, NJ 123456',
            parties: 'Black vs. Smith LT-505345',
            county: 'Newark',
            hearing: '3.02.19',
            status: 'Filed Complaint and Summons \n 3.03.20',
            action: 'Pre-Court Assessment \n Due: 3.10.20'

          },
        ],
      }
    },
}
</script>

<style>
thead.v-data-table-header {
    background-color: #4DCCC4;
}

.header-text {
font: Demi 18px/21px Futura PT;
letter-spacing: 1.26px;
color: #FFFFFF;
text-transform: uppercase;
opacity: 1;
white-space: nowrap;
}
</style>