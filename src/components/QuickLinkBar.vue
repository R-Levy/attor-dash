<template>
  <v-card tile class="mt-4 mb-12 pa-4">
    <div  class="d-flex justify-between full-width">
      <v-col cols="2">
      <v-card-title class="secondary--text font-weight-bold pa-0">Quick Links</v-card-title>
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
          { title: 'CALENDAR', icon: '$calendar' },
          { title: 'MESSAGES', icon: '$email' },
          { title: 'NEW CASES', icon: 'mdi-folder-open' },
          { title: 'TASKS', icon: '$tasks' },
          { title: 'INVOICES', icon: '$invoices' },
        ],
      }
    }

}
</script>

<style>

</style>