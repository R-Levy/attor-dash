<template>
<div class='py-4 px-8'>
    <!-- <InfoBar :items="items"/> -->
    <QuickLinkBar />
    <CaseTable />
</div>
</template>

<script>
//import InfoBar from "@/components/InfoBar";
import QuickLinkBar from '@/components/QuickLinkBar'
import CaseTable from '@/components/CaseTable'

export default {
    name: 'Main',
    components: {
        //InfoBar,
        QuickLinkBar,
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