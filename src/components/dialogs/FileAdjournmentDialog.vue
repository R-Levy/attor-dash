<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">File Adjournment with Court</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
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

            <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">file</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'
var moment = require('moment');

export default {
    name: 'fileConsentDialog',
    data() {
        return{
            filedDate: moment().format('MM.DD.YY'),
        }
    },
    props: {
        dialogCase: Object,
        dialogAction: Object,
    },
    computed: {
    },
    methods:{
        sub(){
            console.log(this.filedDate)
        },
        submit(){
            axios
                .post(`http://localhost:3333/fileAdjournment`,{
                        caseId: this.dialogAction.CaseId,
                        caseActionId: this.dialogAction.CaseActionId,
                        consentType: this.consentType,
                        filedDate: this.filedDate
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