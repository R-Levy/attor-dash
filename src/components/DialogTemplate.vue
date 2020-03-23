<template>
<!-- you will need to put a dialog: false in data of parent container and a trigger -->
  <v-card>
        <v-card-title class="headline secondary--text font-weight-bold">{{title}}</v-card-title>

        <v-card-text>
            <slot name='content'></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="accent"
            text
            x-small
            @click="dialog = false"
          >
            cancel
          </v-btn>

          <v-btn rounded color="accent" x-small dark class="px-8" depressed @click="dialog = false">{{submitText}}</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    name: 'dialog-template',
    props: {
        submitText: String,
        title: String,
    }

}
</script>

<style>

</style>