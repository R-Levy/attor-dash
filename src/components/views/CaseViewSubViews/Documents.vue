<template>
<div>
    <div class="mt-6">
        <table-template :rounded="true" :filter-area-button="'add'" :add-type="'addDocument'">
        <template #data><document-table /></template>
        </table-template>
    </div>

     <!-- this is the dialog that will pop up if add filter button is pressed -->
    <v-dialog
      v-model="addDocumentDialogOpen" value="''"
      max-width="500"
    >
      <add-document-dialog @change:dialog="changeDialog"/>
    </v-dialog>
</div>
</template>



<script>
import DocumentTable from '@/components/DocumentTable'
import TableTemplate from '@/components/TableTemplate'
import AddDocumentDialog from '@/components/dialogs/AddDocumentDialog'
export default {
    name: 'documents',
    components: {
        DocumentTable,
        TableTemplate,
        AddDocumentDialog
    },
    data() {
        return{
        }
    },
    computed: {
     addDocumentDialogOpen: {
        get () {
          return this.$store.getters.dialog === 'addDocumentDialog'
        },
        set (value) {
          this.changeDialog(value)
        },
    
      },
      
  },
  methods: {
      changeDialog(dialogName){
        this.$store.commit('setDialog', dialogName)
      },
  }

}
</script>

<style>
</style>