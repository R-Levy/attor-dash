<template>
    <v-card class="secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <!-- <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Summons and Complaints</v-card-title> -->
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
  <v-stepper non-linear alt-labels v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1> 1" step="1" editable edit-icon="mdi-check">Review</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2" editable>File</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
          <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Review Adjournment Request</v-card-title>
        
<pdf-viewer />
    <div class="d-flex justify-end">
        <v-btn rounded color="accent" dark class="px-8" small depressed
          @click="e1 = 2"
        >
          Continue
        </v-btn>
        <v-btn
                color="accent"
                text
                @click="()=>this.$emit('change:dialog', '')"
            >
                cancel
            </v-btn>
    </div>
      </v-stepper-content>

      <v-stepper-content step="2">
          <v-card-title class="my-2 display-1 secondary--text font-weight-medium">File Adjournment Request</v-card-title>
          <div class="my-4">
          <div class="secondary--text font-weight-medium my-2">
            This may be information pertinent to filing.
        </div>
            <div class="mt-4 secondary--text">
            <v-icon color="primary" >mdi-alert-circle</v-icon>
            Would you like to use the Easy Evictions mailing system?</div>
            <v-radio-group class="my-0 mx-6" v-model="ee_mailing" :mandatory="false" hide-details row>
              <v-radio label="Yes" value="yes" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
              <v-radio label="No" value="no" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
            </v-radio-group>
        </div>
        <div class="d-flex justify-end">
        <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">File</v-btn>
        <v-btn
                color="accent"
                text
                @click="()=>this.$emit('change:dialog', '')"
            >
                cancel
            </v-btn>
        </div>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
          
    </v-card>

</template>

<script>
import axios from 'axios'
import PdfViewer from '@/components/PdfViewer'
export default {
    name: 'fileAdjournmentDialog',
    data() {
        return{
            e1: 1,
            ee_mailing: '',
            email: `Dear ${this.dialogCase.firstname},
Thank you for choosing me to review your Notice to Cease. Please allow 24 hours for review your documentation and the pleading. I will…`
        }
    },
    components: {
        PdfViewer,
    },
    props: {
        dialogCase: Object,
        dialogAction: Object,
    },
    methods:{
        submit(){
            axios
                .post(`http://localhost:3333/fileAdjournment`,{
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