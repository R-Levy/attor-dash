<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#006E90"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    v-model="email"
                    prepend-icon="mdi-email"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <router-link class="no-text-dec small-font mr-2" :to="{ name: 'register' }">register</router-link>
                <v-btn color="#006E90" dark @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        login: function() {
            let email = this.email
            let password = this.password
            this.$store.dispatch('login', {email, password})
            .then(()=> this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
  }
</script>
