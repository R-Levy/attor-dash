<template>
    <div class="mt-0">
        <v-container>
            <v-row>
                <v-col v-for="card in cards" :key="card.title">
                    <v-card class="pa-6 rounded-card accent--text">
                        <span :class="{'secondary--text': card.title !== 'overdue'}" class="display-1 font-weight-medium px-3">{{card.number}}</span>
                        <span :class="{'info--text': card.title !== 'overdue'}" class="custom-overline font-weight-medium px-3">{{card.title}}</span>
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
                    number: this.$store.getters.allTasks,
                },
                {
                    title: 'completed',
                    number: this.$store.getters.completedTasks,
                },
                {
                    title: 'incomplete',
                    number: this.$store.getters.incompletedTasks,
                },
                {
                    title: 'overdue',
                    number: this.$store.getters.overdueTasks,
                }
            ]
        }
    },
    }
</script>

<style>
</style>