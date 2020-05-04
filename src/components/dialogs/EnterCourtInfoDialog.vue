<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Enter Court Information</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        <v-container>
            <v-row align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Court Name</div>
                <v-text-field
                v-model="court.name"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            </v-row>
            <v-row align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Judge</div>
                <v-text-field
                v-model="court.judge"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            </v-row>
            
            <v-row align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Court Date</div>
                <v-text-field
                v-model="court.date"
                rounded
                hide-details
                type="date"
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
               
            </v-col>
            </v-row>
            <v-row>
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Set Reminder</div>
                <v-select
                v-model="court.reminders"
                rounded
                hide-details
                solo
                flat
                dense
                multiple
                background-color="#F0F5F6"
                :items="['Week before', 'Day before', '3 hours before']"
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

            <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">Submit</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'
export default {
    name: 'enterCourtInfoDialog',
    data() {
        return{
            court: {
                name: '',
                date: '',
                judge: '',
                reminders: [],
            },
            menu: false,
        }
    },
    props: {
        dialogCase: Object,
        dialogAction: Object,
    },
    methods:{
        sub(){
            console.log(this.court.date)
        },
        submit(){
            let courtInfo = this.court
            axios
                .post(`http://localhost:3333/enterCourtInfo`,{
                        caseId: this.dialogAction.CaseId,
                        caseActionId: this.dialogAction.CaseActionId,
                        courtInfo: courtInfo
                        })
                        .then((response) => {
                        console.log(response);
                        this.$store.dispatch('loadCases')
                        this.$emit('change:dialog', '')
                        }, (error) => {
                        console.log(error);
                        })
        },
    },

}
</script>

<style>

</style>