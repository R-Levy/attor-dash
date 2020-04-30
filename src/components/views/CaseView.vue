<template>
<div>
    <v-container fluid class="case-view">
    <v-row>
        <v-col cols="10" class="pl-6 pt-0">
            <v-row>
            <v-col cols="4">
                <client-info-card />
            </v-col>
            <v-col cols="8">
                <case-overview-card />
            </v-col>
            </v-row>
            <PageNavBar />
            <router-view></router-view>
        </v-col>
        <v-col cols="2">
            <next-step :currentCase="currentCase"/>
            <timeline />
        </v-col>
    </v-row>
    </v-container>
    <!-- <InfoBar :items="items"/> -->
    
</div>
</template>

<script>
//import InfoBar from "@/components/InfoBar";
import PageNavBar from '@/components/PageNavBar'
import NextStep from '@/components/NextStep'
import Timeline from '@/components/Timeline'
import ClientInfoCard from '@/components/ClientInfoCard'
import CaseOverviewCard from '@/components/CaseOverviewCard'

export default {
    name: 'CaseView',
    components: {
        NextStep,
        Timeline,
        PageNavBar,
        ClientInfoCard,
        CaseOverviewCard,
    },
    data() {
        return{
        }
    },
    computed: {
        currentCase(){
           return this.$store.getters.currentCase(this.$route.params.id)
        },
    }
    

}
</script>

<style>
.rounded-card.v-card.v-sheet.theme--light{
    border-radius: 20px;
}
</style>