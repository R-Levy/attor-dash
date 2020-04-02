<template>
  <div class="my-10 mx-12">
    <div class="font-weight-medium display-1 spaced-text secondary--text">DOCUMENT REVIEW</div>
    <div class="d-flex">
        <v-card outlined class="pa-6 tile secondary--text flex-grow-1" v-for="card in cards" :key="card">
                        <span class="custom-overline font-weight-medium px-3">{{card.title}}</span>
                    </v-card>
    </div>
  </div>
</template>

<script>
export default {
    name: 'document-review',
    data() {
      return{
        cards: [{title: 'to review',
                color: 'accent'},
                {title: 'pending',
                color: 'accent'},
                {title: 'document review',
                color: 'accent'},
        ],
      attorney: {
        name: 'Kimberly Swanson',
        stateBarNo: '888844447',
        memberStartDate: '02.22.20',
        practicingStartDate: '01.23.01',
        background: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        address: {
                        street:'1123 Broadway Ave.',
                        city: 'Newark',
                        state: 'NJ',
                        zip: '99938'
                        },
        phone: '555-555-5555',
        mobile: '555-555-5555',
        fax: '555-555-5555',
        email: 'kswan@attorneys.com',
        counties: [
          'Essex',
          'Newark'
        ],
        practiceAreas: [
          'Real Estate',
          'Eviction',
          'Family Law'
        ]
      },
      }
    }
}
</script>

<style>

</style>