<template>
    <v-card class="pa-4">
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">
            <div>Add Time</div>
            <v-spacer></v-spacer>
            <v-btn color="primary" v-if="!this.task.duration" rounded x-small depressed dark class="px-6" @click="$emit('start:timer')">start timer</v-btn>
            <v-btn color="primary" v-else rounded x-small depressed dark class="px-6" @click="$emit('stop:timer')">stop timer</v-btn>
            </v-card-title>
        <v-card-subtitle class="secondary--text mt-2"><span class="font-weight-medium">Reminder:</span> Client should only be billed for tasks that are not included in the client's flat rate package and are out of the workflow. If you wish to keep track of your time for a flat rate package, set your hourly rate to $0.00.</v-card-subtitle>
        <v-card-text>
        <v-container>
            <div v-for="filter in filters" :key="filter.filter1">
            <v-row align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Client</div>
                <v-select
                v-model="task.clientID"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                :items="clients"
                >
                <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
            </v-col>
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Case Number</div>
                <v-select
                v-model="task.caseID"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                :items="[123]"
                >
                <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
            </v-col>
            </v-row>

            <v-row align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Date</div>
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="computedDateFormatted"
                        append-icon="mdi-calendar"
                        readonly
                        rounded
                            hide-details
                            solo
                            flat
                            dense
                            color="accent"
                            background-color="#F0F5F6"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="task.due_at" @input="menu = false"></v-date-picker>
                </v-menu>
            </v-col>
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Task Duration</div>
                <v-text-field
                rounded
                hide-details
                solo
                flat
                dense
                color="accent"
                v-model="task.duration"
                append-icon="mdi-clock-outline"
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            </v-row>

            <v-row  v-if="!caseID" align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Rate</div>
                <v-text-field
                v-model="task.clientID"
                rounded
                hide-details
                solo
                flat
                dense
                color="accent"
                prefix="$"
                background-color="#F0F5F6"
                >
                <template slot="append" color="accent"> <span  class="overline font-weight-medium"> /HR </span></template></v-text-field>
            </v-col>
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Billable?</div>
                <v-select
                v-model="task.caseID"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                :items="['Yes', 'No']"
                >
                <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
            </v-col>
            </v-row>

            <!-- <v-row v-if="subject==='Other'"> -->
                <v-row>
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
            </v-row>

            <v-row>
                <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Description</div>
                <v-textarea
                v-model="task.description"
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
                <div class="font-weight-medium secondary--text">Created By</div>
                <v-select
                v-model="task.status"
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
                <div class="font-weight-medium secondary--text">Share with Client?</div>
                <v-select
                v-model="task.priority"
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
            </div>

        </v-container>

        </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="accent"
                text
                @click="()=>this.$emit('close:dialog')"
            >
                cancel
            </v-btn>

            <v-btn rounded color="accent" dark class="px-8" depressed @click="submit">add time</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'
export default {
    name: 'add-time-dialog',
    props: {
        clientID: Number,
        caseID: Number,
        time: String
    },
    data() {
        return{
            task: {
                attorneyID: this.$store.getters.attorney.AttorneyId,
                clientID: this.clientID,
                caseID: this.caseID,
                subject: '',
                description: '',
                status: '',
                priority: '',
                due_at: new Date().toISOString().substr(0, 10),
                duration: ''
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
    watch: {
        time: function(val){
            this.task.duration = val
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

}
</script>

<style>

</style>