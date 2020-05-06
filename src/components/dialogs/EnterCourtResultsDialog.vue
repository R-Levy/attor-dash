<template>
  <v-card class="px-6 secondary--text">
    <v-btn class="mt-4 mb-0" color="accent" text>
      <v-icon>mdi-chevron-left</v-icon>view case
    </v-btn>
    <v-card-title class="my-2 display-1 secondary--text font-weight-medium">Post Court Assessment</v-card-title>
    <!-- <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle> -->
    <v-card-text>
      <v-container>
        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">What decision did the judge issue?</div>
            <v-select
              rounded
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="courtDecision"
              :items="['Adjourned the Court Date','Consent and Stay', 'Consent and Vacate', 'Default Judgement', 'Judgement for Possession', 'Judgement for Possession - Orderly Removal', 'Lost Case', 'Marini Hearing', 'Other']"
            >
              <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon>
            </v-select>
          </v-col>
        </v-row>
        <v-row
          align-content="center"
          class="my-2"
          v-if="courtDecision === 'Default Judgement' || courtDecision === 'Judgement for Possession' || courtDecision === 'Judgement for Possession - Orderly Removal'"
        >
          <v-col class="pt-0">
            <div
              class="font-weight-medium secondary--text"
            >Did you file a Warrant of Removal with the Court?</div>
            <v-radio-group class="ma-0" v-model="wor" :mandatory="false" hide-details row>
              <v-radio label="Yes" value="yes" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
              <v-radio label="No" value="no" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row align-content="center" v-if="courtDecision === 'Adjourned the Court Date'">
          <v-col class="pt-0">
            <div
              class="font-weight-medium secondary--text"
            >If you received the new court date, please enter below:</div>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="computedCourtDateFormatted"
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
              <v-date-picker v-model="newDate" @input="menu = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <span v-if="courtDecision === 'Consent and Stay'">
        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">Complaint balance</div>
            <v-text-field
              prefix="$"
              rounded
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="complaintBalance"
        ></v-text-field>
          </v-col>
        </v-row>
        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">Have you received money from the tenant in court?</div>
            <v-radio-group class="ma-0 pb-2" v-model="moneyInCourt" :mandatory="false" hide-details row>
              <v-radio label="Yes" value="yes" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
              <v-radio label="No" value="no" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
            </v-radio-group>
            <span v-if="moneyInCourt === 'yes'">
            <v-text-field
              prefix="$"
              rounded
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="moneyInCourtAmount"
        ></v-text-field>
            </span>
          </v-col>
        </v-row>

        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">Please specify the payment installments in the consent:</div>
            <v-container>
            <v-row align-content="center" class="text-center">
                <v-col>
                Date
                </v-col>
                <v-col>
                Amount
                </v-col>
            </v-row>
            <div v-for="(term, index) in terms" :key="index">
            <v-row>
                <v-col cols="1" class="pt-5 subtitle-2 accent--text">
                    {{index +1}}
                </v-col>
                <v-col>
                <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="term.date"
                  prepend-inner-icon=""
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
              <v-date-picker v-model="term.date" @input="menu = false"></v-date-picker>
            </v-menu>
                </v-col>
                <v-col>
                <v-text-field
              prefix="$"
              rounded
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="term.amount"
        ></v-text-field>
                </v-col>
            </v-row>
            </div>
            </v-container>
          </v-col>
        </v-row>
        
            <v-row class="d-flex justify-end">
            <v-btn color="accent" class="mx-6" :disabled="terms[terms.length-1].date === ''" text @click="addTerm"><v-icon left>mdi-plus</v-icon> add term</v-btn>
            </v-row>

        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">Specify any other terms in the consent:</div>
            <v-textarea
              rounded
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="complaintBalance"
        ></v-textarea>
          </v-col>
        </v-row>
        </span>

        <span v-if="courtDecision === 'Consent and Vacate'">
          <v-row>
            <v-col class="pt-0">
            <div
              class="font-weight-medium secondary--text"
            >What is the date that the tenant has to vacate?</div>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="computedCourtDateFormatted"
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
              <v-date-picker v-model="newDate" @input="menu = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">Were there any payment terms in the consent?</div>
            <v-radio-group class="ma-0 pb-2" v-model="paymentTerms" :mandatory="false" hide-details row>
              <v-radio label="Yes" value="yes" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
              <v-radio label="No" value="no" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        
        <span v-if="paymentTerms === 'yes'">
        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">Have you received money from the tenant in court?</div>
            <v-radio-group class="ma-0 pb-2" v-model="moneyInCourt" :mandatory="false" hide-details row>
              <v-radio label="Yes" value="yes" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
              <v-radio label="No" value="no" on-icon="mdi-checkbox-marked-circle-outline"></v-radio>
            </v-radio-group>
            <span v-if="moneyInCourt === 'yes'">
            <v-text-field
              prefix="$"
              rounded
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="moneyInCourtAmount"
        ></v-text-field>
            </span>
          </v-col>
        </v-row>

        <v-row align-content="center">
          <v-col>
            <div class="font-weight-medium secondary--text">Please specify the payment installments in the consent:</div>
            <v-container>
            <v-row align-content="center" class="text-center">
                <v-col>
                Date
                </v-col>
                <v-col>
                Amount
                </v-col>
            </v-row>
            <div v-for="(term, index) in terms" :key="index">
            <v-row>
                <v-col cols="1" class="pt-5 subtitle-2 accent--text">
                    {{index +1}}
                </v-col>
                <v-col>
                <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="term.date"
                  prepend-inner-icon=""
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
              <v-date-picker v-model="term.date" @input="menu = false"></v-date-picker>
            </v-menu>
                </v-col>
                <v-col>
                <v-text-field
              prefix="$"
              rounded
              hide-details
              solo
              flat
              dense
              background-color="#F0F5F6"
              v-model="term.amount"
        ></v-text-field>
                </v-col>
            </v-row>
            </div>
            </v-container>
          </v-col>
        </v-row>
        
            <v-row class="d-flex justify-end">
            <v-btn color="accent" class="mx-6" :disabled="terms[terms.length-1].date === ''" text @click="addTerm"><v-icon left>mdi-plus</v-icon> add term</v-btn>
            </v-row>

        </span>
        </span>

        <v-row align-content="center">
          <v-col>
            <div
              class="font-weight-medium secondary--text"
            >Upload the documents you filed with the court:</div>
            <div
              class="secondary--text font-italic"
            >This may be the Consent to Stay Judgement, Judgement for Possession, or Warrant of Removal</div>
            <v-file-input
              rounded
              hide-details
              small-chips
              multiple
              clearable
              prepend-inner-icon="mdi-paperclip"
              prepend-icon
              solo
              flat
              dense
              v-model="currFiles"
              background-color="#F0F5F6"
              @change="inputChanged"
            ></v-file-input>
            <div v-if="files.length">
              <v-chip
                small
                outlined
                color="primary"
                close
                close-icon="mdi-close"
                @click:close="remove(index)"
                v-for="(f, index) in files"
                :key="index"
                class="mr-1 mt-2"
              >{{ f.name }}</v-chip>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div
              class="font-weight-medium secondary--text"
            >Provide notes from the court results</div>
            <div
              class="secondary--text font-italic"
            >These will be sent to the client.</div>
            <v-textarea class="mb-4" filled no-resize background-color="#F0F5F6" v-model="notes" hide-details></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="accent" text @click="()=>this.$emit('change:dialog', '')">cancel</v-btn>

      <v-btn rounded color="accent" dark class="px-8" small depressed @click="submit">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "enterCourtResultsDialog",
  data() {
    return {
      courtDecision: "",
      wor: "",
      moneyInCourt: "no",
      paymentTerms: '',
      menu: false,
      newDate: '',
      terms: [
        {
          date: '',
          amount: '',
            }
      ],      
      currFiles: [],
      files: []
    };
  },
  props: {
    dialogCase: Object,
    dialogAction: Object
  },
  methods: {
    submit() {
      axios
        .post(`http://localhost:3333/enterCourtResults`, {
          caseId: this.dialogAction.CaseId,
          caseActionId: this.dialogAction.CaseActionId,
          courtDecision: this.courtDecision
        })
        .then(
          response => {
            console.log(response);
            this.$store.dispatch("loadCases");
            this.$emit("change:dialog", "");
          },
          error => {
            console.log(error);
          }
        );
    },
    remove(index) {
      this.files.splice(index, 1);
    },
    inputChanged() {
      console.log(this.files);
      this.files = [...this.currFiles, ...this.files];
    },
    formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      addTerm(){
            this.terms.push({
                date: '',
                amount: '',
            })
            console.log(this.terms)
        }
  },
  computed: {
      computedCourtDateFormatted () {
        return this.formatDate(this.newDate)
      },
    },
};
</script>

<style>
</style>