<template>
  <div class="text-center d-flex align-end justify-space-between full-width">
    <!-- filter button and filters -->
    <div class="d-flex align-end">
      <v-btn rounded color="accent" small dark class="px-8" depressed @click.stop="dialog = true">add filter</v-btn>
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
        <v-btn icon color="accent"><v-icon>$settings</v-icon></v-btn>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="1000"
    >
    <filter-dialog />
    </v-dialog>
  </div>
</template>

<script>
import FilterChip from "@/components/FilterChip";
import FilterDialog from "@/components/FilterDialog"
export default {
    name: 'filter-area',
    components: {
      FilterChip,
      FilterDialog,
    },
    data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style>

</style>