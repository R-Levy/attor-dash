<template>
<div class='py-4 px-8'>
    <QuickLinkBar />
  <CaseTable />
</div>
</template>

<script>
import QuickLinkBar from '@/components/QuickLinkBar'
import CaseTable from '@/components/CaseTable'

export default {
    name: 'Main',
    components: {
        QuickLinkBar,
        CaseTable,
    }

}
</script>

<style>

</style>