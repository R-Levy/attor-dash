<template>
    <div>
        <v-row>
        <v-col class="mx-8">
        <tasks />
        </v-col>

        <v-col cols="3">
            <v-date-picker no-title v-model="picker2" color="primary" :events="[]"></v-date-picker>
        </v-col>

        </v-row>
    
    </div>
</template>

<script>
import Tasks from '@/components/views/CaseViewSubViews/Tasks.vue'

export default {
    name: 'attorney-tasks',
    components: {
        Tasks
    },
    data() {
        return{
        }
    },
    }
</script>

<style>
</style>