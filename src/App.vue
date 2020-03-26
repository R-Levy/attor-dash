<template>
  <v-app style="background-color: #F0F5F6;">
     <Navigation />

    <v-content>
     <Toolbar />
     <!-- <Main /> -->
     <router-view  />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
//import Main from './components/pages/Main'

export default {
  name: 'App',

  components: {
    Navigation,
    Toolbar,
    //Main,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application{
  font-family: Hind, sans-serif;
}
.full-width {
  width: 100%;
}
.small-font{
  font-size: 10px;
}
</style>