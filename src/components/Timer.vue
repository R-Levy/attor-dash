<template>
  <v-chip x-small dark color="primary">
      <v-btn icon x-small class="ee-play" v-if="!running" @click="play"><v-icon color="white">mdi-play</v-icon></v-btn>
      <v-btn icon x-small class="ee-play" v-if="running" @click="stop"><v-icon color="white">mdi-stop</v-icon></v-btn>
      {{time}}
      <v-btn icon color="white" x-small class="ee-clock ml-1" @click.stop="dialog = true"><v-icon color="white">mdi-clock-outline</v-icon></v-btn>

        <v-dialog v-model="dialog" max-width="550">
      <add-time-dialog @close:dialog="closeDialog" @start:timer="play" @stop:timer="stop" :time="time"/>
  </v-dialog>
  </v-chip>
</template>

<script>
import AddTimeDialog from '@/components/dialogs/AddTimeDialog'
export default {
    name: 'timer',
    components: {
        AddTimeDialog,
    },
    data(){
        return{
            time: '00:00:00',
            timeBegan: null,
            timeStopped: null,
            // stoppedDuration: 0,
            started: null,
            running: false,
            dialog: false,

        }
    },
    methods:{
        play(){
            if(this.running) return;

            if (this.timeBegan === null) {
                this.reset();
                this.timeBegan = new Date();
            }
            this.started = setInterval(this.clockRunning, 10)
            this.running = true
        },
        stop(){
            this.running = false
            this.timeStopped = new Date()
            clearInterval(this.started)
            this.reset()
        },
        reset(){
            this.running = false
            clearInterval(this.started)
            this.timeBegan = null;
            this.timeStopped = null;
            this.time = '00:00:00'
        },
        clockRunning(){
            let currentTime = new Date()
            , timeElapsed = new Date(currentTime - this.timeBegan)
            , hour = timeElapsed.getUTCHours()
            , min = timeElapsed.getUTCMinutes()
            , sec = timeElapsed.getUTCSeconds()

            this.time = 
                this.zeroPrefix(hour)+':'+
                this.zeroPrefix(min)+ ':'+
                this.zeroPrefix(sec)

        },
        zeroPrefix(num){
            let zero = '00'
            return(zero + num).slice(-2)
        },
        closeDialog(){
            this.dialog = false
        }
    }

}
</script>

<style>
.ee-clock ::before{
    font-size: 13px;
}

.ee-play ::before{
    font-size: 15px;
}
</style>