<template>
    <v-card class="pa-4">
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Add Document</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        <v-container>
            <v-row  v-if="!caseID" align-content="center">
            <v-col class="pt-0">
                <vue-dropzone id="drop1" :options="dropOptions" ></vue-dropzone>
            </v-col>
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Document Name</div>
                <v-text-field
                v-model="document.name"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            </v-row>

            <!-- <v-row v-if="subject==='Other'"> -->
                <v-row>
                <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Subject</div>
                <v-text-field
                v-model="document.subject"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            </v-row>
            <!-- <v-row v-else>
                <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Subject</div>
                 <v-autocomplete
                        v-model="subject"
                        :items="['in progress', 'completed', 'overdue', 'Other']"
                        :search-input="search"
                        cache-items
                        rounded
                        flat
                        hide-no-data
                        hide-details
                        solo
                        dense
                        background-color="#F0F5F6"
                >
                <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon>
                </v-autocomplete>
                </v-col>
            </v-row> -->

            <v-row>
                <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Description</div>
                <v-textarea
                v-model="document.description"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                rows="3"
                ></v-textarea>
                </v-col>
            </v-row>

            <v-row align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Status</div>
                <v-select
                v-model="document.status"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                :items="['in progress', 'completed', 'overdue']"
                >
                <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
            </v-col>
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Priority</div>
                <v-select
                v-model="document.priority"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                :items="['Low', 'Medium', 'High']"
                >
                <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
            </v-col>
            </v-row>

        </v-container>

        </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="accent"
                text
                @click="()=>this.$emit('change:dialog', '')"
            >
                cancel
            </v-btn>

            <v-btn rounded color="accent" dark class="px-8" depressed @click="submit">add task</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'
import vueDropzone from "vue2-dropzone";

export default {
    name: 'add-document-dialog',
    components: {
        vueDropzone,
    },
    props: {
        clientID: Number,
        caseID: Number,
    },
    data() {
        return{
            dropOptions: {
                 url: "https://httpbin.org/post"
            },
            document: {
                attorneyID: this.$store.getters.attorney.AttorneyId,
                clientID: this.clientID,
                caseID: this.caseID,
                name: '',
                description: '',
                status: '',
                priority: '',
                due_at: new Date().toISOString().substr(0, 10),
                reminders: [],
            },
            menu: false,
            // subject: '',
            // subjectCustom: '',
            filters: [
            {
                filter1: '',
                filter2: '',
            }
            ],
            clients: [
                {
                    text: 'Jane Doe',
                    value: 1,
                },
                {
                    text: 'Leslie Smith',
                    value: 2,
                },
                {
                    text: 'Sam Fried',
                    value: 3,
                },
            ]
        }
    },
    methods:{
        submit(){
            axios
            .post('http://localhost:3333/tasks', this.task)
            .then(() => this.$store.dispatch('loadTasks'))

            this.$emit('change:dialog', '')
        },
        addFilter(){
            this.filters.push({
                filter1: '',
                filter2: '',
            })
        },
        formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },

    },

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.task.due_at)
      },
    },
    watch:{
      subjectSelect(){
          return this.subject !== 'Other'
      }
    },

}
</script>

<style>

</style>