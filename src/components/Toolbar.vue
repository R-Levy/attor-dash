<template>
  <v-system-bar color='white' class="toolbar elevation-2">

      <v-text-field
      class="styled-input"
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="search clients"
          single-line
          hide-details
        ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color='info' small >$tasks</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color='info' x-small >$email</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color='info' small >mdi-logout</v-icon>
      </v-btn>

      <v-app-bar-nav-icon color='info' small ></v-app-bar-nav-icon>
    </v-system-bar>
</template>

<script>
export default {
    name: 'Toolbar',
}
</script>

<style scoped>
  .toolbar{
    height: 40px;
  }

  .styled-input {
  transform: scale(0.7);
    transform-origin: left;
    margin-top: -12px;
    width: 10vw;
}
</style>