<template>
<!-- you will need to put a dialog: false in data of parent container and a trigger -->
  <v-card>
        <v-card-title class="my-2 display-1 secondary--text font-weight-medium">{{title}}</v-card-title>
        <v-card-subtitle v-if="subtitle"><span class="font-weight-medium">Note:</span> {{subtitle}} </v-card-subtitle>
        <v-card-text>
            <slot name='content'></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="accent"
            text
            @click="changeDialog('')"
          >
            cancel
          </v-btn>

          <v-btn rounded color="accent" dark class="px-8" depressed @click="changeDialog('')">{{submitText}}</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    name: 'dialog-template',
    props: {
        submitText: String,
        title: String,
        subtitle: String,
    },
    methods: {
      changeDialog(dialogName){
        window.console.log(dialogName)
        this.$store.commit('setDialog', dialogName)
      }
    }

}
</script>

<style>

</style>