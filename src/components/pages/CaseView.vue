<template>
<div class='py-4 px-8'>
    <v-container>
    <v-row>
        <v-col cols="10">
            <QuickLinkBar />
        </v-col>
        <v-col cols="2">
            <v-card>col 2</v-card>
        </v-col>
    </v-row>
    </v-container>
    <!-- <InfoBar :items="items"/> -->
    
</div>
</template>

<script>
//import InfoBar from "@/components/InfoBar";
import QuickLinkBar from '@/components/QuickLinkBar'

export default {
    name: 'Main',
    components: {
        QuickLinkBar,
    },
    data() {
        return{
        }
    }

}
</script>

<style>

</style>