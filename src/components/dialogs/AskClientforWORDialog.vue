<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Warrant of Removal</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        <div class="secondary--text font-weight-medium my-2">
            When you click “Send” <span class="font-weight-bold"> {{dialogCase.firstname}} {{dialogCase.lastname}}</span> will receive the automated email you have previously created, tailored for this case.
            You may use the space below to ask questions and/or provide information pertaining to this case.
        </div>
        <div class="my-4 secondary--text">
            <v-icon color="primary" small>mdi-alert-circle</v-icon>
            Haven’t set up your email templates? You may create them <router-link :to="{ name: 'main' }">here</router-link></div>

        <div class="custom-overline  info--text font-weight-medium  mb-1"> Message </div>
        <v-textarea
          class="mb-4"
          filled
          no-resize
          background-color="#F0F5F6"
          v-model="email"
        ></v-textarea>
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

            <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">Send</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'
export default {
    name: 'askClientforWORDialog',
    data() {
        return{
            courtDecision: 'Judgement for Possession',
            email: `Dear ${this.dialogCase.firstname},
As the results of your hearing was Judgement for Possession, it is advisable that a Warrant of Removal be filed. Please inform me if you would like one to be filed on your behalf...`,
//As the results of your hearing was ${this.courtDecision}, it is advisable that a Warrant of Removal be filed. Please inform me if you would like one to be filed on your behalf...`,

        }
    },
    computed:{
    },
    props: {
        dialogCase: Object,
        dialogAction: Object,
    },
    methods:{
        sub(){
           console.log('di', this.dialogAction)
        },
        submit(){
            axios
                .post(`http://localhost:3333/askClientForWOR`,{
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