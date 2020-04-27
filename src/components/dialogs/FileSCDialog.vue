<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">File Summons and Complaints</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        <div class="secondary--text font-weight-medium my-2">
            Information about filing??
        </div>
        <div class="my-4 secondary--text">
            <v-icon color="primary">mdi-alert-circle</v-icon>
            Use the Easy Evictions mailing system</div>

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

            <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">File</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'
export default {
    name: 'fileSCDialog',
    data() {
        return{
            email: `Dear ${this.dialogCase.firstname},
Thank you for choosing me to review your Notice to Cease. Please allow 24 hours for review your documentation and the pleading. I will…`
        }
    },
    props: {
        dialogCase: Object,
        dialogAction: Object,
    },
    methods:{
        submit(){
            axios
                .post(`http://localhost:3333/acceptCase`,{
                        emailText: this.email,
                        caseId: this.dialogAction.CaseId,
                        caseActionId: this.dialogAction.CaseActionId
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