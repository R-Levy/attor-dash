<template>
  <div class="filter-chip font-weight-medium d-flex ml-2">
      <p class="px-1 ma-0">{{filter1}} </p>
      <p class='primary--text ma-0'>{{condition}} </p>
      <p class="px-1 ma-0">{{filter2}} </p>
      <v-icon color="accent" x-small>mdi-close</v-icon>
  </div>
</template>

<script>
export default {
    name: 'filter-chip',
    data(){
        return {
            condition: "is",
        }
    },
    props: {
        filter1: String,
        filter2: String,
    }

}
</script>

<style>
.filter-chip{
    border-bottom: 2px solid #C3D1D2;
    font-size: .75em;

}

</style>