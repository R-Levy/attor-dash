<template>
  <v-card class="rounded-card pa-4 pl-6 pb-0 secondary--text">
      <div v-if="client.avatar" class="py-4">
      <v-avatar style="border-radius: 50%;" size="55px">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      </div>

    <div v-else class="py-4">
    <v-avatar color="#006E90">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar>
    </div>

    <div class="font-weight-bold headline">{{client.name}}</div>
    <div class="font-weight-medium title">{{client.title}}</div>
    <router-link class="accent--text" :to="{ name: 'main' }">all cases</router-link>

    <div id="client-info" class="py-6">
    <div>
        <p class="overline info--text font-weight-bold mb-1"> phone </p>
        <p class="date-text">{{client.phone}}</p>
    </div>
    <div>
        <p class="overline info--text font-weight-bold mb-1"> email </p>
        <p class="date-text">{{client.email}}</p>
    </div>
    <div>
        <p class="overline info--text font-weight-bold mb-1"> address </p>
        <p class="date-text mb-0">{{client.address.street}},</p>
        <p class="date-text">{{client.address.city}}, {{client.address.state}} {{client.address.zip}}</p>
    </div>
    </div>

  </v-card>
</template>

<script>
export default {
    name: 'client-info-card',
    data(){
        return{
            client: {
                avatar: '',
                name: 'Jayne Smith',
                title: 'Property Manager',
                phone: '347.453.4545',
                email: 'smith@marketing.com',
                address: {
                        street:'1123 Broadway Ave.',
                        city: 'Newark',
                        state: 'NJ',
                        zip: '99938'
                        }
            }
        }
    }

}
</script>

<style>

</style>