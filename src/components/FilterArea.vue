<template>
  <div class="text-center d-flex align-end justify-space-between full-width">
    <!-- filter button and filters -->
    <div class="d-flex align-end">
      <v-btn rounded color="accent" small dark class="px-8" depressed @click.stop="changeDialog('filterDialog')">add filter</v-btn>
      <div v-for="filter in filters" :key="filter.filter1">
        <filter-chip :filter1="filter.filter1" :filter2="filter.filter2"/>
      </div>
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
        <v-btn v-if="button === 'column-filter'" icon color="accent" @click.stop="changeDialog('columnDialog')"><v-icon>$settings</v-icon></v-btn>
        <v-btn v-if="button === 'add'" color="accent" rounded small dark class="px-6 mx-2" depressed @click="changeDialog(`${addType}Dialog`)"><v-icon x-small class="mx-2">mdi-plus</v-icon> new</v-btn>
    </div>

    <!-- this is the dialog that will pop up if add filter button is pressed -->
    <v-dialog
      v-model="filterDialogOpen" value="''"
      max-width="1000"
    >
      <filter-dialog @change:dialog="changeDialog"/>
    </v-dialog>

    <!-- this is the dialog that will pop up if columns button is pressed -->
    <v-dialog
      v-model="columnDialogOpen"
      max-width="500"
    >
      <dialog-template title="Customize Columns" submitText="update">
            <template v-slot:content><column-dialog /></template>
      </dialog-template>
    </v-dialog>




  </div>

</template>

<script>
import FilterChip from "@/components/FilterChip";
import DialogTemplate from "@/components/dialogs/DialogTemplate";
import FilterDialog from "@/components/dialogs/FilterDialog";
import ColumnDialog from "@/components/dialogs/ColumnDialog"
export default {
    name: 'filter-area',
    components: {
      FilterChip,
      FilterDialog,
      ColumnDialog,
      DialogTemplate,
    },
    props: {
      button: {
        type: String,
        default: ''
      },
      addType: String,
    },
    data () {
      return {
        filters: [
          {
            filter1:'county',
            filter2: 'essex',
            },
            {
            filter1:'client',
            filter2: 'jane doe',
            },
        ]
      }
    },
    methods:{
      changeDialog(dialogName){
        this.$store.commit('setDialog', dialogName)
      }
    },
    computed: {
      columnDialogOpen: {
        get () {
          return this.$store.getters.dialog === 'columnDialog'
        },
        set (value) {
          this.changeDialog(value)
        },
    
      },
      filterDialogOpen: {
        get () {
          return this.$store.getters.dialog === 'filterDialog'
        },
        set (value) {
          this.changeDialog(value)
        },
    
      },
  }
}
</script>

<style>

</style>