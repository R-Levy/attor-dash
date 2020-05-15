<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Court Response to Adjournment Request</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        
        <div
              class="font-weight-medium secondary--text"
            >Enter the Court's response:</div>
            <v-radio-group class="ma-0" v-model="response" :mandatory="false" hide-details row>
              <v-radio label="Adjournment Request Granted" value="granted" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
              <v-radio label="Adjournment Request Denied" value="denied" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
            </v-radio-group>

        <div v-if="response === 'granted'" class="mt-4">
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
                <div class="font-weight-medium secondary--text">Address</div>
                <v-text-field
                v-model="court.address"
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
                <div class="font-weight-medium secondary--text">City</div>
                <v-text-field
                v-model="court.city"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            <v-col class="pt-0" cols="3">
                <div class="font-weight-medium secondary--text">State</div>
                <v-text-field
                v-model="court.state"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            <v-col class="pt-0" cols="4">
                <div class="font-weight-medium secondary--text">Zip</div>
                <v-text-field
                v-model="court.zipcode"
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
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Room</div>
                <v-text-field
                v-model="court.room"
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
                <div class="font-weight-medium secondary--text">Date</div>
                <v-menu
              v-model="datemenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="court.date"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  rounded
                  hide-details
                  solo
                  flat
                  dense
                  background-color="#F0F5F6"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="court.date" @input="datemenu = false"></v-date-picker>
            </v-menu>
               
            </v-col>
            <v-col class="pt-0">
                <div class="font-weight-medium secondary--text">Time</div>
                <v-menu
              v-model="timemenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="court.time"
                  prepend-inner-icon="mdi-clock-outline"
                  readonly
                  rounded
                  hide-details
                  solo
                  flat
                  dense
                  background-color="#F0F5F6"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-model="court.time"
                ampm-in-title 
                >
                </v-time-picker>
            </v-menu>
               
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
        </div>
        <div v-if="response === 'denied'" class="mt-4">
            <div class="font-weight-medium secondary--text">Why was the request denied?</div>
            <v-textarea
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="reason"
        ></v-textarea>
        <div class="secondary--text font-weight-medium my-2">
            When you click “Submit,” <span class="font-weight-bold"> {{dialogCase.firstname}} {{dialogCase.lastname}}</span> will receive the automated email you have previously created, tailored for this case.
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
        </div>
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

            <v-btn rounded color="accent" class="px-8" small :dark="response !== ''" depressed @click="submit" :disabled="response === ''">Submit</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'

export default {
    name: 'adjournmentCourtResponseDialog',
    data() {
        return{
            //email: `Dear ${this.dialogCase.firstname},
//The court has denied your adjournment request due to ${reason}. Consequently, the case will be proceeding on the original date. Please contact me if you have any further questions. `,
        response: '',
        reason: '',
        court: {
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: '',
                phone: '',
                date: '',
                time: '',
                judge: '',
                room: '',
                reminders: [],
            },
            datemenu: false,
            timemenu: false,
        }
    },
    props: {
        dialogCase: Object,
        dialogAction: Object,
    },
    computed: {
        email(){
            return `Dear ${this.dialogCase.firstname},
The court has denied your adjournment request due to the fact that ${this.reason}. Consequently, the case will be proceeding on the original date. Please contact me if you have any further questions. `
        }
    },
    methods:{
        sub(){
           console.log('di', this.dialogAction)
        },
        submit(){
            if (this.response === 'granted'){
            axios
                .post(`http://localhost:3333/adjournmentGranted`,{
                        courtInfo: this.court,
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
            }
        },
    },
    mounted(){
        axios
            .get(`http://localhost:3333/courtInfo/${this.dialogCase.id}`)
            .then(r => r.data)
            .then((data) => {
                this.court.name = data.courtName
                this.court.address = data.address
                this.court.city = data.city
                this.court.state = data.state
                this.court.zipcode = data.zipcode
                this.court.judge = data.judge
                this.court.phone = data.phone
                this.court.room = data.room
            }), (error) => {
                console.log(error)
            }
    }

}
</script>

<style>

</style>