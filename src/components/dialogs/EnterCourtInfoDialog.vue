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
            <div class="font-weight-medium secondary--text">Docket Number</div>
            <v-row align="end">
            <v-col class="pt-0"  cols="3">
                <v-text-field
                v-model="court.docket_prefix"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            <div class="font-weight-medium secondary--text pb-6">-</div>
            <v-col class="pt-0">
                <v-text-field
                v-model="court.docket_mid"
                rounded
                hide-details
                solo
                flat
                dense
                background-color="#F0F5F6"
                ></v-text-field>
            </v-col>
            <div class="font-weight-medium secondary--text pb-6">-</div>
            <v-col class="pt-0" cols="4">
                <v-text-field
                v-model="court.docket_end"
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
var moment = require('moment');
export default {
    name: 'enterCourtInfoDialog',
    data() {
        return{
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
                docket_prefix: 'LT',
                docket_mid: '',
                docket_end: moment().format('YY')
            },
            datemenu: false,
            timemenu: false,
        }
    },
    props: {
        dialogCase: Object,
        dialogAction: Object,
    },
    mounted() {
        this.court.name = 'Atlantic County Courthouse'
        this.court.address = '1201 Bacharach Blvd.'
        this.court.city = 'Atlantic City'
        this.court.state = 'NJ'
        this.court.zipcode = '08401'
        this.court.phone = '(609) 402-0100'
        this.court.judge = 'McClain'
        this.court.room = '1C'
    },
    methods:{
        sub(){
            console.log(this.court)
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