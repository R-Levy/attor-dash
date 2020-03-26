<template>
  <v-card class="my-4 pa-2 rounded-card" color="#006E90">
    <div   class="d-flex  justify-space-between mx-2">
    <div
      v-for="item in items"
      :key="item.title">
      <page-nav-item :title="item.title" :icon="item.icon" />
      </div>
    </div>
  </v-card>
</template>

<script>
import PageNavItem from "@/components/PageNavItem";
export default {
    name: 'PageNavBar',
    components: {
      PageNavItem,
    },
    data () {
      return {
        items: [
          { title: 'OVERVIEW', icon: '$searchFolder' },
          { title: 'DOCUMENTS', icon: '$invoices' },
          { title: 'CREATE FORM', icon: '$form' },
          { title: 'REQUESTS', icon: '$download' },
          { title: 'MESSAGE', icon: '$email' },
          { title: 'NOTES', icon: '$documentFolder' },
          { title: 'TASKS', icon: '$tasks' },
          { title: 'INVOICES', icon: '$bank' },
        ],
      }
    }

}
</script>