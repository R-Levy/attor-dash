<template>
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
   
</template>

<script>
export default {
    name: 'filter-dialog',
    methods:{
    },

}
</script>

<style>

</style>