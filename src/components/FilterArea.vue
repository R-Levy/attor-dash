<template>
  <div class="text-center d-flex align-end justify-space-between full-width">
    <!-- filter button and filters -->
    <div class="d-flex align-end">
      <v-btn rounded color="accent" small dark class="px-8" depressed @click.stop="filterDialogOpen = true">add filter</v-btn>
      <filter-chip :filter1="'county'" :filter2="'essex'"/>
    </div>
    <!-- search area -->
    <div class="d-flex align-end">
      <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="search"
          single-line
          hide-details
        ></v-text-field>
        <v-btn icon color="accent" @click.stop="columnDialogOpen = true"><v-icon>$settings</v-icon></v-btn>
    </div>

    <!-- this is the dialog that will pop up if add filter button is pressed -->
    <v-dialog
      v-model="filterDialogOpen"
      max-width="1000"
    >
      <dialog-template title="Filter" submitText="apply filter">
            <template v-slot:content><filter-dialog /></template>
      </dialog-template>
    </v-dialog>

    <!-- this is the dialog that will pop up if columns button is pressed -->
    <v-dialog
      v-model="columnDialogOpen"
      max-width="500"
    >
      <dialog-template title="Customize Columns" submitText="update">
            <template v-slot:content><filter-dialog /></template>
      </dialog-template>
    </v-dialog>




  </div>

</template>

<script>
import FilterChip from "@/components/FilterChip";
import DialogTemplate from "@/components/DialogTemplate";
import FilterDialog from "@/components/FilterDialog"
export default {
    name: 'filter-area',
    components: {
      FilterChip,
      FilterDialog,
      DialogTemplate,
    },
    data () {
      return {
        filterDialogOpen: false,
        columnDialogOpen: false,
      }
    },
}
</script>

<style>

</style>