<template>
  <v-card class="rounded-card pa-4 pl-6 secondary--text" height="100%">

    <v-card-title class="font-weight-bold px-0">Case Overview</v-card-title>
    <v-container fluid>
        <v-row>
            <v-col>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> filed </p>
                    <p class="date-text">{{courtInfo.filed}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> hearing </p>
                    <p class="date-text">{{courtInfo.hearing}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> docket no. </p>
                    <p class="date-text">{{courtInfo.docketNo}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> parties </p>
                    <p class="date-text mb-0">{{courtInfo.defendent}} vs. {{courtInfo.plaintiff}}</p>
                </div>
            </v-col>

            <v-col>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> ground </p>
                    <p class="date-text">{{courtInfo.ground}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> suit amount </p>
                    <p class="date-text">{{courtInfo.suitAmount}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> lease type </p>
                    <p class="date-text">{{courtInfo.leaseType}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> property address </p>
                    <p class="date-text mb-0">{{courtInfo.propertyAddress.street}},</p>
                    <p class="date-text">{{courtInfo.propertyAddress.city}}, {{courtInfo.propertyAddress.state}} {{courtInfo.propertyAddress.zip}}</p>
                </div>
            </v-col>

            <v-col>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> judge </p>
                    <p class="date-text">{{courtInfo.judge}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1"> county </p>
                    <p class="date-text">{{courtInfo.county}}</p>
                </div>
                <div>
                    <p class="overline info--text font-weight-bold mb-1">  court address </p>
                    <p class="date-text mb-0">{{courtInfo.courtAddress.street}},</p>
                    <p class="date-text">{{courtInfo.courtAddress.city}}, {{courtInfo.courtAddress.state}} {{courtInfo.courtAddress.zip}}</p>
                </div>
            </v-col>
        </v-row>
    </v-container>

  </v-card>
</template>

<script>
export default {
    name: 'case-overview-card',
    data(){
        return{
            courtInfo: {
                filed: '02.31.2020',
                hearing: '04.21.2020',
                docketNo: 'LT-74545',
                defendent: 'William Harvey',
                plaintiff: 'Lisa Miller',
                ground: 'Non-Payment',
                suitAmount: '$2,345',
                leaseType: 'Residential',
                courtAddress: {
                        street:'1123 Broadway Ave.',
                        city: 'Newark',
                        state: 'NJ',
                        zip: '99938'
                        },
                propertyAddress: {
                        street:'1123 Broadway Ave.',
                        city: 'Newark',
                        state: 'NJ',
                        zip: '99938'
                        },
                judge: 'Hon. Walters',
                county: 'Essex',
            },
        }
    }

}
</script>

<style>

</style>