<template>
    <div class="mt-6">
        <table-template :rounded="true">
        <template #data><document-table /></template>
        </table-template>
    </div>
</template>

<script>
import DocumentTable from '@/components/DocumentTable'
import TableTemplate from '@/components/TableTemplate'

export default {
    name: 'documents',
    components: {
        DocumentTable,
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