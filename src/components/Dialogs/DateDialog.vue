<template>
   <v-dialog
        ref="dialog"
        :value="true"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="updateDate"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
</template>

<script>
export default {
   props:['task'],
   data()
   {
       return{
           date:null
       }
   },
   mounted()
   {
       if(this.task.duedate)
       this.date=this.task.duedate;
   },
   methods:
   {
       updateDate()
       {
           let payload = {
               id:this.task.id,
               new_date:this.date
           }
           this.$store.dispatch('updateTaskDate',payload);
           this.$emit('close');
       }
   }
}
</script>

<style>

</style>