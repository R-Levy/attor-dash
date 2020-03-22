<template>
  <v-card>
        <v-card-title class="headline secondary--text font-weight-bold">Filter</v-card-title>

        <v-card-text>
                <v-container>
                    <v-row align-content="center">
                    <v-col>
                        <v-select
                        rounded
                        solo
                        flat
                        dense
                        background-color="#F0F5F6"
                        :items="['Client', 'Service Type', 'County', 'Hearing', 'Status']"
                        label="Select Criteria"
                        >
                        <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                        rounded
                        solo
                        flat
                        dense
                        background-color="#F0F5F6"
                        :items="['is']"
                        label="Select Condition"
                        >
                        <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                        rounded
                        solo
                        flat
                        dense
                        background-color="#F0F5F6"
                        :items="['is']"
                        label="Select Value"
                        >
                        <v-icon medium slot="append" color="accent">mdi-chevron-down</v-icon></v-select>
                    </v-col>
                    <v-col cols="1">
                    <v-btn icon color="info"><v-icon>mdi-close</v-icon></v-btn>
                    </v-col>
                    </v-row>

                    <v-row>
                    <v-btn large color="accent" class="mx-6" text @click="addFilter"><v-icon left>mdi-plus-circle-outline</v-icon> add filter</v-btn>
                    </v-row>
                </v-container>
                </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="accent"
            text
            x-small
            @click="dialog = false"
          >
            cancel
          </v-btn>

          <v-btn rounded color="accent" x-small dark class="px-8" depressed @click="dialog = false">apply filter</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    name: 'filter-dialog',

}
</script>

<style>

</style>