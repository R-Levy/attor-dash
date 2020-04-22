<template>

  <v-app style="background-color: #F0F5F6;">
    
     <Navigation />

    <v-content>
     <Toolbar />
     <!-- <Main /> -->
     <router-view  />
    </v-content>

    <v-footer inset app absolute>
      <div class="caption">
        © 2020 Easy Evictions. All Rights Reserved. 
        <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">Privacy Policy</router-link>  
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">Terms</router-link>  
      <router-link class="accent--text small-font mr-2" :to="{ name: 'main' }">Disclaimer</router-link>
      </div></v-footer>
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

  // created: function() {
  //   this.$http.intercepters.response.use(undefined, function(err){
  //     return new Promise(function(){

  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest){
  //         this.$store.dispatch('logout')
  //       }

  //       throw err
  //     })
  //   })
  // }

};
</script>

<style>
.v-application{
  font-family: Hind, sans-serif;
}
.full-width {
  width: 100%;
}
.custom-overline {
  text-transform: uppercase;
  letter-spacing: 1.4px;
}

.spaced-text {
    letter-spacing: .29px;
    font-weight: 500;
}

.no-text-dec {
    text-decoration: none;
}
</style>