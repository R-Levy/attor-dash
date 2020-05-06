<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Summons and Complaints</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
  <v-stepper alt-labels v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Review</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Accept</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">File</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
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
            e1: 1,
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
                .post(`http://localhost:3333/fileSC`,{
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