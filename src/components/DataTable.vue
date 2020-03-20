<template>
<div>
    <v-data-table
      :headers="headers"
      :items="cases"
      :search="search"
    ></v-data-table>
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
            align: 'center'
          },
          {
            text: 'Submitted',
            value: 'submitted',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
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
            align: 'center'
          },
          {
            text: 'Parties',
            value: 'parties',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
          },
          {
            text: 'County',
            value: 'county',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
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
            align: 'center'
          },
          {
            text: 'Action',
            value: 'action',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
          },
          {
            text: 'Message',
            value: 'message',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
          },
          {
            text: 'Case',
            value: 'case-view',
            class: 'header-text white--text font-weight-regular',
            align: 'center'
          },
        ],
        cases: [
          {
            name: 'Jane Doe',
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
}
</style>