<template>
  <v-card class="rounded-card mt-6 pa-2 secondary--text">
      <v-card-title class="accent--text font-weight-bold py-6">Case Progress</v-card-title>

      <v-timeline dense align-top>
          <v-timeline-item
            v-for="item in completed_items"
            :key="item.id"
            color="primary"
            small
            fill-dot
          >
              <span class="font-weight-bold"> {{item.step}} </span>
              <span>{{item.subtitle}}</span>
              <v-divider class="mt-4 mr-4"></v-divider>
          </v-timeline-item>

          <v-timeline-item
            v-for="item in noncompleted_items"
            :key="item.id"
            color="white"
            small
          >
              <span class="font-weight-bold"> {{item.step}} </span>
              <span class="font-small">{{item.subtitle}}</span>
              <v-divider class="mt-4 mr-4"></v-divider>
          </v-timeline-item>
      </v-timeline>
  </v-card>
</template>

<script>
export default {
name: 'timeline',
 data: () => ({
      completed_items: [
        {
          id: 1,
          step: 'Approved Case',
          subtitle: 'Accepted: 01.12.20',
        },
        {
          id: 2,
          step: 'Reviewed Case',
          subtitle: 'Completed: 01.12.20',
        },
        {
          id: 3,
          step: 'Reviewed Case',
          subtitle: 'Completed: 01.12.20',
        },
      ],
      noncompleted_items: [
        {
          id: 4,
          step: 'Approved Case',
          subtitle: 'Accepted: 01.12.20',
        },
        {
          id: 5,
          step: 'Reviewed Case',
          subtitle: 'Completed: 01.12.20',
        },
        {
          id: 6,
          step: 'Reviewed Case',
          subtitle: 'Completed: 01.12.20',
        },
      ],
    }),
}
</script>

<style>
.v-timeline {
    padding-top: 0px;
    margin-left: -1.5em;
}
.v-timeline-item__body {
    font-size: small;
}

.font-small{
    font-size: 0.7rem;
}

.theme--light.v-timeline .v-timeline-item__dot {
    background: #4dccc4;
}
</style>