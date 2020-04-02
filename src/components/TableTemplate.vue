<template>
  <v-card :tile="!rounded" :class="{'rounded-card': rounded}" class='pb-4'>
    <v-card-title class='secondary--text font-weight-bold d-flex flex-column align-start pl-12'>
      <div>{{title}}</div>
      <filter-area :button="filterAreaButton" :add-type="addType" />
    </v-card-title>
    <slot name='data'></slot>
  </v-card>
</template>

<script>
import FilterArea from '@/components/FilterArea'

export default {
    name: 'table-template',
    components: {
        FilterArea,
    },
    props: {
      title: String,
      rounded: {
                type: Boolean,
                default: false
                },
      filterAreaButton: String,
      addType: String,
    }

}
</script>

<style>
thead.v-data-table-header {
    background-color: #4DCCC4;
}

.header-text {
font: Demi 18px/21px Futura PT;
letter-spacing: 1.26px;
color: #FFFFFF;
text-transform: uppercase;
opacity: 1;
white-space: nowrap;
}

tr {
  color: #003A60;
}

.lighter-blue {
  color: #006E90;
}
</style>