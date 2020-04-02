<template>
    <v-card class="px-6 secondary--text">
        <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Decline</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        <div class="custom-overline  info--text font-weight-medium mb-1"> Reason </div>
        <v-radio-group v-model="reason" :mandatory="false">
        <div v-for="r in reasons" :key="r">
             <v-radio
                :value="r"
                :label="r"
                hide-details
                
                ></v-radio>
        </div>
        </v-radio-group>
        <div class="custom-overline  info--text font-weight-medium mb-1"> Message </div>
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

            <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">Decline</v-btn>
            </v-card-actions>
    </v-card>

</template>

<script>
import axios from 'axios'
export default {
    name: 'decline-dialog',
    data() {
        return{
            email: '',
            reason: '',
            reasons: [
                'Not available.',
                'Case is too complex.',
                'Incomplete filing, etc.',
                'Too many clients.',
                'Other.'

            ]
        }
    },
    props: {
        clientName: String,
    },
    methods:{
        submit(){
            axios
                .post('http://localhost:3333/declineCase',{
                        emailText: this.email,
                        reason: this.reason,
                        })
                        .then((response) => {
                        console.log(response);
                        
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