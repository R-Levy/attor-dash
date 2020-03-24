<template>
  <v-container>
      <div  v-for="item in items" :key="item.title" class="blue-list">
            <v-checkbox 
                dense
                v-model="item.checked"
                :label="item.title"
                on-icon="mdi-checkbox-blank-circle"
                off-icon="mdi-checkbox-blank-circle-outline"
                hide-details
                ></v-checkbox>
      </div>
  </v-container>
</template>

<script>
export default {
    name: 'blue-list',
    props: {
        items: Array,
    }
}
</script>

<style>
.blue-list label.v-label.theme--light {
    background-color: #F0F5F6;
    padding: .5em 2em;
    margin: 0 2em 0 0;
    font-size: .85em;
    border-radius: 23px;
    color: #1E5273;
}

.blue-list .v-input--selection-controls {
    margin-top: 0px;
    padding-top: 7px;
}
</style>