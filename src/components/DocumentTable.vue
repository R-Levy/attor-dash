<template>
<div>
    <v-data-table
      :headers="headers"
      :items="documents"
      :search="search"
    >
    <template v-slot:item.documentName={item}>
      <div class="secondary--text font-weight-bold">{{item.documentName.name}}</div>
      <div class="caption">{{item.documentName.fileName}}</div>
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">view</router-link>  
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">edit</router-link>  
      <router-link class="accent--text small-font" :to="{ name: 'main' }">log time</router-link>
    </template>

    <template v-slot:item.type={item}>
        <span class="pr-4"><v-icon :color="typeColor(item.type)" small>mdi-circle</v-icon></span> {{item.type}}
    </template>

    <template v-slot:item.created={item}>
      <div class="secondary--text font-weight-bold">{{item.created.date}}</div>
      <div class="caption">{{item.created.time}}</div>
    </template>

    <template v-slot:item.updated={item}>
      <div class="secondary--text font-weight-bold">{{item.updated.date}}</div>
      <div class="caption">{{item.updated.time}}</div>
    </template>

    <template v-slot:item.actions>
        <div class="d-flex">
        <v-btn x-small icon color="accent"><v-icon>mdi-cloud-download</v-icon></v-btn>
      <v-btn x-small icon color="accent"><v-icon>mdi-trash-can</v-icon></v-btn>
        </div>
    </template>
    
    </v-data-table>

    
</div>
</template>

<script>
export default {
    name: 'document-table',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Document',
            value: 'documentName',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: false,
          },
          {
            text: 'Description',
            value: 'description',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: false,
          },
          {
            text: 'Type',
            value: 'type',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: true,
          },
          {
            text: 'Created',
            value: 'created',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
            sortable: true,
          },
          {
            text: 'Updated',
            value: 'updated',
            class: 'header-text white--text font-weight-regular',
            align: 'left',
          },
          {
            text: '',
            value: 'actions',
            class: 'header-text white--text font-weight-regular',
            align: 'center',
            sortable: false,
            width: '1%',
          },

        ],
        documents: [
          {
            documentName: {
                        name: 'Lease Agreement',
                        fileName: 'lease_agreement.pdf'
                        },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            type: 'Supporting',
            created: {
                date: '01/11/2020',
                time: '1:23 PM',
            },
            updated: {
                date: '01/13/2020',
                time: '8:23 AM',
            }
          },
          {
            documentName: {
                        name: 'Lease Agreement',
                        fileName: 'lease_agreement.pdf'
                        },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            type: 'Pleading',
            created: {
                date: '01/11/2020',
                time: '1:23 PM',
            },
            updated: {
                date: '01/13/2020',
                time: '8:23 AM',
            }
          },
          {
            documentName: {
                        name: 'Lease Agreement',
                        fileName: 'lease_agreement.pdf'
                        },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            type: 'Supporting',
            created: {
                date: '01/11/2020',
                time: '1:23 PM',
            },
            updated: {
                date: '01/13/2020',
                time: '8:23 AM',
            }
          },
        ],
      }
    },
    computed: {
    },
    methods: {
        typeColor(type) {
            switch (type){
                case 'Supporting':
                    return 'primary'
                case 'Pleading':
                    return 'secondary'
                default:
                    return 'red'
            }
        }
    }

}
</script>

<style>
</style>