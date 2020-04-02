<template>
    <div class="mt-6">
        <table-template :rounded="true" title="Requests for Documents" :filter-area-button="'add'">
        <template #data><request-table /></template>
        </table-template>
    </div>
</template>

<script>
import RequestTable from '@/components/RequestTable'
import TableTemplate from '@/components/TableTemplate'

export default {
    name: 'documents',
    components: {
        RequestTable,
        TableTemplate,
    },
    data() {
        return{
        }
    }

}
</script>

<style>
</style>