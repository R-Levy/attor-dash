<template>
<div class='py-4 px-8'>
    <!-- <InfoBar :items="items"/> -->
    <QuickLinkBar />
    <table-template title="Case Overview">
        <template #data><CaseTable /></template>
    </table-template>
</div>
</template>

<script>
//import InfoBar from "@/components/InfoBar";
import QuickLinkBar from '@/components/QuickLinkBar'
import TableTemplate from '@/components/TableTemplate'
import CaseTable from '@/components/CaseTable'

export default {
    name: 'Main',
    components: {
        //InfoBar,
        QuickLinkBar,
        TableTemplate,
        CaseTable,
    },
    data() {
        return{
        }
    }

}
</script>

<style>

</style>