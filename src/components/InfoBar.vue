<template>
  <div>
      <div v-for="item in items" :key="item.title">
      <div>{{item.title}}</div>
      <div>{{item.number}}</div>
      <div>{{item.data.number}} <span>this month </span></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'InfoBar',
    props: {
        items: Array,

    }

}
</script>

<style>

</style>