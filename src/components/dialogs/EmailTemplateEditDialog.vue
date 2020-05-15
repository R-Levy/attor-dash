<template>
    <v-card class="px-6 secondary--text">
        <!-- <v-btn class="mt-4 mb-0" color="accent" text>
            <v-icon>mdi-chevron-left</v-icon>
            view case
        </v-btn> -->
        <v-card-title class="my-4 display-1 secondary--text font-weight-medium">{{email.name}}</v-card-title>
        <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
        <v-card-text>
        <div class="secondary--text headline font-weight-medium my-4">
            Subject:
        </div>
        <div class="my-4 secondary--text">
            {{email.subject}}</div>

        <div class="custom-overline  info--text font-weight-medium  mb-1"> Message </div>
        <v-textarea
          class="mb-4"
          filled
          rows="14"
          background-color="#F0F5F6"
          v-model="email.content"
        ></v-textarea>
        </v-card-text>
            <!-- <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="accent"
                text
                @click="()=>this.$emit('change:dialog', '')"
            >
                cancel
            </v-btn>

            <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">Accept</v-btn>
            </v-card-actions> -->
    </v-card>

</template>

<script>
import axios from 'axios'
export default {
    name: 'emailTemplateEditDialog',
    data() {
        return{
            email: {}
        }
    },
    props: {
        emailId: Number,
    },
    mounted(){
        this.getTemplate()
    },
    watch: {
        emailId: function(){
            this.getTemplate()
        },
    },
    methods:{
        getTemplate(){
           this.$http.get('http://localhost:3333/emailTemplateById', {
            params: {
                emailId: this.emailId
            }
        })
        .then(r => r.data)
        .then(data => this.email = data)
        },
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