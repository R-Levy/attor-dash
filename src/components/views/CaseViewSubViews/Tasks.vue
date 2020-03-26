<template>
    <div class="mt-0">
        <v-container>
            <v-row>
                <v-col v-for="card in cards" :key="card.title">
                    <v-card class="pa-6 rounded-card">
                        <span class="display-2 font-weight-medium px-3">{{card.number}}</span>
                        <span class="overline font-weight-medium px-3">{{card.title}}</span>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <table-template :rounded="true">
        <template #data><task-table /></template>
        </table-template>
    </div>
</template>

<script>
import TaskTable from '@/components/TaskTable'
import TableTemplate from '@/components/TableTemplate'

export default {
    name: 'tasks',
    components: {
        TaskTable,
        TableTemplate,
    },
    data() {
        return{
            cards: [
                {
                    title: 'all',
                    number: 10,
                },
                {
                    title: 'completed',
                    number: 4,
                },
                {
                    title: 'incomplete',
                    number: 4,
                },
                {
                    title: 'overdue',
                    number: 1,
                }
            ]
        }
    }

}
</script>

<style>
</style>