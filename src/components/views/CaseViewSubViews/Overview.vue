<template>
    <v-row>
    <v-col>
        <case-overview-doc-card title="Supporting Documents" />
        <case-overview-doc-card title="Notes" />
    </v-col>
    <v-col>
        <case-overview-doc-card title="Pleadings" />
        <case-overview-doc-card title="Recent Activity" />
    </v-col>
    </v-row>
</template>

<script>
import CaseOverviewDocCard from '@/components/CaseOverviewDocCard'

export default {
    name: 'overview',
    components: {
        CaseOverviewDocCard,
    },
    data() {
        return{
        }
    }

}
</script>

<style>
</style>