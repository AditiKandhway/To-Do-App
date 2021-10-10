<template>
  
    <v-dialog
      :value="true"
      persistent
      width="290px"
    >

      <v-card>
        <v-card-title>
          <span class="headline">Edit Task?</span>
        </v-card-title>
        <v-card-text>
       Edit your task here
        <v-text-field v-model="taskTitle"
        @keyup.enter="saveTask"
        />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="saveTask"
            :disabled="taskCheckInvalid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props:['task'],
  data()
  {
    return {  
      taskTitle: null
    }
  },
  mounted()
  {
    this.taskTitle=this.task.title
  },
  computed:{
      taskCheckInvalid(){
           return !this.taskTitle || this.taskTitle===this.task.title
      }
  },
  methods:{
     saveTask()
     {
       if(!this.taskCheckInvalid)
       {
          let payload={
            id:this.task.id,
            new_title:this.taskTitle
          }
          this.$store.dispatch('updateTask',payload);
       }
       this.$emit('close');
       this.$vuetify.goTo(0,{duration:0})
     }
  }
}
</script>

<style>

</style>