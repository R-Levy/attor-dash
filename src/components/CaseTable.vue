<template>
  <v-card tile class='mt-12'>
    <v-card-title class='secondary--text font-weight-bold d-flex flex-column align-start pl-12'>
      <div>Case Overview</div>
      <filter-area />
    </v-card-title>
    <DataTable />
  </v-card>
</template>

<script>
import DataTable from '@/components/DataTable'
import FilterArea from '@/components/FilterArea'

export default {
    name: 'CaseTable',
    components: {
        DataTable,
        FilterArea,
    }

}
</script>

<style>

</style>