<template>
  <div class="my-10 mx-12">
    <div class="d-flex justify-space-between secondary--text ">
    <div class="font-weight-bold display-1 spaced-text">MESSAGES</div>
    </div>
    <v-container>
        <v-row>
        <v-col>
        <v-card tile class="ma-6 pa-4">
            <!-- <v-container>
                <v-row>
                <v-col> -->
                <div class="d-flex align-center">
              <v-text-field
              class="ma-6"
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="search messages"
                outlined
                dense
                rounded
                single-line
                hide-details
                ></v-text-field>
                <v-btn icon color="accent"><v-icon>mdi-filter</v-icon></v-btn>
                </div>

                <v-list two-line>
      <template v-for="(item, index) in items">
        <!-- <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader> -->

        <v-list-item
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content 
          class="secondary--text">
            <v-list-item-title> <span class="font-weight-medium">{{item.title}}</span></v-list-item-title>
            <v-list-item-subtitle class="secondary--text">{{item.sender}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
              <div class="caption">Oct. 23</div>
          <div class="caption"><v-avatar size="20" color="primary">2</v-avatar> <v-icon small>mdi-dots-horizontal</v-icon></div>
        </v-list-item-action>
        </v-list-item>

                <v-divider
          :key="index"
          :inset="item.inset"
        ></v-divider>

      </template>
    </v-list>
        </v-card>
        </v-col>
        
        <v-col>
        <v-card tile class="ma-6 pa-10 secondary--text">
          <div>

    
</div>
        </v-card>
        </v-col>
        </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
    name: 'messages',
    data () {
      return {
        search: '',
        email: '',
        templates: [
        ],
        items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          sender: "Leslie Smith",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
      }
    },
    computed: {
    },
    mounted(){
      this.$http.get(`http://localhost:3333/emailTemplates`, {
        params: {userId: 191}
      })
        .then(r => r.data)
        .then(data => this.templates = data)
    },
    methods: {
      closeDialog(){
        this.viewDialogOpen = false
        this.editDialogOpen = false
      },
      openViewDialog(emailId){
        this.email = emailId
        console.log(this.email)
        this.viewDialogOpen = true
      },
      openEditDialog(emailId){
        this.email = emailId
        this.editDialogOpen = true
      }
    }
}
</script>

<style>
</style>