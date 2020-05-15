<template>
  <div class="my-10 mx-12">
    <div class="d-flex justify-space-between secondary--text ">
    <div class="font-weight-bold display-1 spaced-text">PROFILE</div>
    <div class=""><span class="font-weight-medium">Member Since</span> {{fixDate(attorney.Created_at)}}</div>
    </div>
    <v-container fluid>
    <v-row>
      <v-col>

        <!-- personal details ------------------------------------------------------------------------------------------>
        <v-card tile class="d-flex justify-space-between ma-6 pa-10">

          <!-- attorney picture -->
          <div>
              <div v-if="attorney.avatar">
              <v-avatar style="border-radius: 50%;" size="75px">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
              </div>

            <div v-else>
            <v-avatar style="border-radius: 50%;" size="75px" color="#006E90">
              <v-icon large dark>mdi-account-circle</v-icon>
            </v-avatar>
            </div>
          </div>

          <div class="secondary--text">
            <div class="font-weight-bold headline">{{attorney.Name}}</div>
            <div class=""><span class="font-weight-medium">State Bar No.</span> {{attorney.StateBarNo}}</div>
            <div class=""><span class="font-weight-medium">Practicing Since</span> {{fixDate(attorney.PracticingStartDate)}}</div>
          </div>
          <div class="ml-6">
            <v-btn icon><v-icon  small color="accent">mdi-cog</v-icon></v-btn>
          </div>
        </v-card>

        <!-- background -------------------------------------------------------------------------------------------------------->
        <v-card tile class="d-flex justify-space-between ma-6 pa-10 secondary--text">
          <div>
          <div class="headline font-weight-medium mb-4">Background</div>
          <div>{{attorney.background}}</div>
          </div>
          <div class="ml-6">
            <v-btn icon><v-icon  small color="accent">mdi-cog</v-icon></v-btn>
          </div>
        </v-card>

      </v-col>
      <v-col>
        <!-- contact -------------------------------------------------------------------------------------------------------->
        <v-card tile class="d-flex justify-space-between ma-6 pa-10 secondary--text">
          <div class="full-width">
          <div class="headline font-weight-medium mb-4">Contact</div>
          <v-container fluid>
        <v-row>
              <v-col>
                <div>
                    <p class="overline font-weight-bold mb-1"> phone </p>
                    <p class="spaced-text font-weight-regular">{{attorney.Phone}}</p>
                </div>
                <div>
                    <p class="overline font-weight-bold mb-1"> mobile </p>
                    <p class="spaced-text font-weight-regular">{{attorney.Mobile}}</p>
                </div>
                <div>
                    <p class="overline font-weight-bold mb-1"> fax </p>
                    <p class="spaced-text font-weight-regular">{{attorney.Fax}}</p>
                </div>
            </v-col>

            <v-col>
                <div>
                    <p class="overline font-weight-bold mb-1"> email </p>
                    <p class="spaced-text font-weight-regular">{{attorney.Email}}</p>
                </div>
                <div>
                    <p class="overline font-weight-bold mb-1"> address </p>
                    <p class="spaced-text font-weight-regular mb-0">{{attorney.Address}},</p>
                    <p class="spaced-text font-weight-regular">{{attorney.City}}, {{attorney.State}} {{attorney.Zip}}</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
          </div>
          <div class="ml-6">
            <v-btn icon><v-icon  small color="accent">mdi-cog</v-icon></v-btn>
          </div>
        </v-card>

        <!-- counties -------------------------------------------------------------------------------------------------------->
        <v-card tile class="d-flex justify-space-between ma-6 pa-10 secondary--text">
          <div>
          <div class="headline  font-weight-medium mb-4">Counties Serving</div>
          <div v-for="county in attorney.counties" :key="county">{{county}}</div>
          </div>
          <div class="ml-6">
            <v-btn icon><v-icon  small color="accent">mdi-cog</v-icon></v-btn>
          </div>
        </v-card>

        <!-- practice areas -------------------------------------------------------------------------------------------------------->
        <v-card tile class="d-flex justify-space-between ma-6 pa-10 secondary--text">
          <div>
          <div class="headline  font-weight-medium mb-4">Practice Areas</div>
          <div v-for="area in attorney.practiceAreas" :key="area">{{area}}</div>
          </div>
          <div class="ml-6">
            <v-btn icon><v-icon  small color="accent">mdi-cog</v-icon></v-btn>
          </div>
        </v-card>

      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'profile',
    data() {
      return{
      // attorney: {
      //   name: 'Kimberly Swanson',
      //   stateBarNo: '888844447',
      //   memberStartDate: '02.22.20',
      //   practicingStartDate: '01.23.01',
      //   background: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      //                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      //   address: {
      //                   street:'1123 Broadway Ave.',
      //                   city: 'Newark',
      //                   state: 'NJ',
      //                   zip: '99938'
      //                   },
      //   phone: '555-555-5555',
      //   mobile: '555-555-5555',
      //   fax: '555-555-5555',
      //   email: 'kswan@attorneys.com',
      //   counties: [
      //     'Essex',
      //     'Newark'
      //   ],
      //   practiceAreas: [
      //     'Real Estate',
      //     'Eviction',
      //     'Family Law'
      //   ]
      // },
      attorney: this.$store.getters.attorney,
       }
    },
    methods: {
      fixDate(date){
          var d = new Date(Date.parse(date));
          var day = d.getDate()
          var month = d.getMonth()+1 //months are counted starting from 0
          var yr = d.getFullYear()
          return `${month}.${day}.${yr}`
      },
    }
}
</script>

<style>

</style>