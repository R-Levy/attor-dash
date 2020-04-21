<template>
  <v-card class="rounded-card pa-2" color="primary">
      <div class="white--text">
          <div class="text-center">
          <v-icon color="white">$megaphone</v-icon>
          <p class="overline font-weight-bold mb-0"> NEXT STEP: </p>
          <p>{{nextStep}}</p>
          </div>

          <v-divider dark color='white' class="ma-5"></v-divider>

          <div>
            <span class="overline font-weight-bold mb-0 mx-2"> DUE: </span>
            <span class="spaced-text font-weight-light">{{nextStepDue}}</span>
          </div>
          <div>
            <span class="overline font-weight-bold mb-0 mx-2"> STATUS: </span>
            <span class="font-weight-light">{{nextStepStatus}}</span>
          </div>

          <div class="d-flex flex-column justify-center mx-6 my-4">
          <v-btn depressed rounded color="accent" class="mb-2">complete task</v-btn>
          <v-btn outlined rounded color="white">create manual step</v-btn>
          </div>
      </div>
  </v-card>
</template>

<script>
export default {
    name: 'next-step',
    data() {
        return{
            nextStep: 'Post-Court Assessment',
            nextStepDue: '03.24.2020',
            nextStepStatus: 'pending',
        }
    }
}
</script>

<style>
span.v-btn__content {
    text-transform: lowercase;
    letter-spacing: 0.7px;
}

</style>