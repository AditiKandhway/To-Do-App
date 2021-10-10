<template>
    <v-text-field
        outlined
        placeholder="Add task"
        v-model="newAddedTitle"
        @keyup.enter="addtask"
        hide-details
        clearable
        class="field-add-task pa-3 mr-8"
        >
         <template v-slot:append>
              <v-icon 
              @click="addtask"
              :disabled="newTaskInvalid"
              >mdi-plus</v-icon>
            </template>
        </v-text-field>
        
</template>

<script>

export default{
    name:'FieldTask',
    data()
    {
      return{
        newAddedTitle:''
      }
    },
    computed:{
      newTaskInvalid()
      {
        return this.newAddedTitle==='';
      }
    },
    methods:{
        addtask()
        {
            if(!this.newTaskInvalid)
            {
              this.$store.dispatch('addTask',this.newAddedTitle);
              this.newAddedTitle='';
            }
        }
    },
}
</script>

<style scoped>


</style>
