<template>
  <v-chip x-small dark color="primary">
      <v-btn icon x-small class="ee-play"><v-icon color="white">mdi-play</v-icon></v-btn>
      {{time}}
      <v-btn icon color="white" x-small class="ee-clock ml-1"><v-icon color="white">mdi-clock-outline</v-icon></v-btn>
  </v-chip>
</template>

<script>
export default {
    name: 'timer',
    data(){
        return{
            time: '00:00'
        }
    }

}
</script>

<style>
.ee-clock ::before{
    font-size: 13px;
}

.ee-play ::before{
    font-size: 15px;
}
</style>