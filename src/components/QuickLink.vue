<template>
<div class='quick-link'>
  <v-btn depressed small color="accent" fab class="white--text">
    <v-icon>{{icon}}</v-icon>
    </v-btn>
    <p class="info--text overline text-center ma-2"> {{title}} </p>
</div>
</template>

<script>
export default {
    name: 'QuickLink',
    props: {
        title: String,
        icon: String,
    }
}
</script>

<style>
.quick-link{
    margin: auto;
}
</style>