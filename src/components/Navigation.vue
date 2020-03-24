<template>
  <v-navigation-drawer
        app
      v-model="drawer"
      :mini-variant="mini"
      permanent
      color='#006E90'
      class="elevation-6"
    >
      <v-list class='d-flex flex-column justify-between navlinks' dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{path: item.path}"
          link
        >
          <v-list-item-icon>
            <v-icon color="#FFFFFF" size="x-large">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home', path: '/' },
          { title: 'Files', icon: 'mdi-folder-open', path: 'case-view' },
          { title: 'Files', icon: '$tasks' },
          { title: 'Users', icon: 'mdi-account-group' },
          { title: 'Mail', icon: '$email' },
          { title: 'Files', icon: 'mdi-email-open-multiple-outline' },
          { title: 'Files', icon: 'mdi-finance' },
          { title: 'Users', icon: 'mdi-cogs' },
          { title: 'Users', icon: 'mdi-key' },
        ],
        mini: true,
      }
    },
}
</script>

<style scoped>
.navlinks{
  height: 100%;
}
</style>