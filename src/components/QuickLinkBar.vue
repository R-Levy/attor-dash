<template>
  <v-card tile class="my-4 pa-4">
    <div  class="d-flex justify-between full-width">
      <v-col cols="2">
      <v-card-title class="secondary--text font-weight-bold">Quick Links</v-card-title>
      </v-col>
      <div
      class="d-flex flex-row justify-between full-width mx-2"
      v-for="item in items"
      :key="item.title">
      <QuickLink :title="item.title" :icon="item.icon" />
      </div>
    </div>
  </v-card>
</template>

<script>
import QuickLink from "@/components/QuickLink";
export default {
    name: 'QuickLinkBar',
    components: {
      QuickLink,
    },
    data () {
      return {
        items: [
          { title: 'CALENDAR', icon: 'mdi-home' },
          { title: 'MESSAGES', icon: 'mdi-folder-open' },
          { title: 'NEW CASES', icon: 'mdi-folder-open' },
          { title: 'TASKS', icon: '$tasks' },
          { title: 'INVOICES', icon: 'mdi-email-variant' },
        ],
      }
    }

}
</script>

<style>

</style>