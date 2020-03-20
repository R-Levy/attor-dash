<template>
  <v-card tile>
    <v-card-title class='secondary--text font-weight-bold'>
      Case Overview
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <DataTable />
  </v-card>
</template>

<script>
import DataTable from '@/components/DataTable'

export default {
    name: 'CaseTable',
    components: {
        DataTable,
    }

}
</script>

<style>

</style>