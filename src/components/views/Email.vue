<template>
  <div class="my-10 mx-12">
    <div class="d-flex justify-space-between secondary--text ">
    <div class="font-weight-bold display-1 spaced-text">EMAIL TEMPLATES</div>
    </div>
    
        <v-card tile class="d-flex justify-space-between mt-12 mx-6 pa-10">
            <!-- <v-container>
                <v-row>
                <v-col> -->
                <div 
              class="email-search">
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="search by email name"
                single-line
                hide-details
                ></v-text-field>
                </div>
                <!-- </v-col>
                <v-col> -->
                <div>
                <v-select
                class="email-select"
                v-model="servicePlan"
                rounded
                outlined
                flat
                dense
                hide-details
                :items="['Document Review', 'Full Service Eviction', 'Pay As You Go', 'All']"
                label="Service Type"
                >
                <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
                </div>
                <!-- </v-col>
                </v-row>
            </v-container> -->
        </v-card>

        <v-card tile class="ma-6 pa-10 secondary--text">
          <div>
    <v-data-table
        class="white-header"
      :headers="headers"
      :items="templates"
      :search="search"
    >
    <template v-slot:item.name={item}>
      <div class="secondary--text font-weight-bold">{{item.name}}</div>
    </template>

    <template v-slot:item.actions={item}>
        <div class="d-flex">
        <v-btn x-small icon color="accent" @click="openViewDialog(item.emailId)"><v-icon>mdi-eye</v-icon></v-btn>
      <v-btn x-small icon color="accent" @click="openEditDialog(item.emailId)"><v-icon>mdi-pencil-outline</v-icon></v-btn>
        </div>
    </template>
    
    </v-data-table>

    
</div>
        </v-card>

        <!-- this is the dialog that will pop up if view button is pressed -->
    <v-dialog
      v-model="viewDialogOpen" value="''"
      max-width="700"
    >
      <emailTemplateViewDialog :emailId="this.email" @close:dialog="closeDialog"/>
    </v-dialog>

    <v-dialog
      v-model="editDialogOpen" value="''"
      max-width="700"
    >
      <emailTemplateEditDialog :emailId="this.email" @close:dialog="closeDialog"/>
    </v-dialog>
  </div>
</template>

<script>
import EmailTemplateEditDialog from '@/components/dialogs/EmailTemplateEditDialog.vue'
import EmailTemplateViewDialog from '@/components/dialogs/EmailTemplateViewDialog.vue'
export default {
    name: 'email',
    components: {
      EmailTemplateEditDialog,
      EmailTemplateViewDialog
    },
    data () {
      return {
        search: '',
        viewDialogOpen: false,
        email: '',
        editDialogOpen: false,
        servicePlan: 'All',
        headers: [
          {
            text: 'Name',
            value: 'name',
            class: 'header-text font-weight-regular',
            align: 'left',
            sortable: true,
          },
          {
            text: 'Service Type',
            value: 'servicePlanName',
            class: 'header-text font-weight-regular',
            align: 'left',
            sortable: true,
            width: '30%',
            filter: value => {
              if (this.servicePlan ==='All') return true

              return value === this.servicePlan
            },
          },
          {
            text: 'Subject',
            value: 'subject',
            class: 'header-text font-weight-regular',
            align: 'left',
            sortable: false,
          },
          {
            text: 'Action',
            value: 'actions',
            class: 'header-text font-weight-regular',
            align: 'center',
            sortable: false,
            width: '1%',
          },

        ],
        templates: [
        ],
      }
    },
    computed: {
    },
    mounted(){
      this.$http.get(`http://localhost:3333/emailTemplates`, {
        params: {userId: 191}
      })
        .then(r => r.data)
        .then(data => this.templates = data)
    },
    methods: {
      closeDialog(){
        this.viewDialogOpen = false
        this.editDialogOpen = false
      },
      openViewDialog(emailId){
        this.email = emailId
        console.log(this.email)
        this.viewDialogOpen = true
      },
      openEditDialog(emailId){
        this.email = emailId
        this.editDialogOpen = true
      }
    }
}
</script>

<style>
 .white-header thead.v-data-table-header{
    background-color: #ffffff;
}

.email-search {
    width: 40%
}
</style>