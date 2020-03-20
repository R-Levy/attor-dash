<template>
  <v-system-bar color='white' class="toolbar elevation-2">

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color='info' small >mdi-magnify</v-icon>
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
    height: 30px;
  }
</style>