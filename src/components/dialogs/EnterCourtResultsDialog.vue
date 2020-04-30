<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Enter Court Results</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        <v-container>
            <v-row align-content="center">
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Court Decision</div>
                <v-select
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                v-model="courtDecision"
                :items="['Consent and Stay', 'Consent and Vacate', 'Default Judgement', 'Judgement for Possession', 'Judgement for Possession - Orderly Removal', 'Lost Case', 'Marini Hearing', 'Other']"
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
    name: 'enterCourtResultsDialog',
    data() {
        return{
            court: {
                name: '',
                date: '',
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
                .post(`http://localhost:3333/enterCourtResults`,{
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