<template>
    <v-text-field
        outlined
        label="Add task"
        v-model="newAddedTitle"
        @keyup.enter="addtask"
        hide-details
        clearable
        >
         <template v-slot:append>
              <v-icon 
              color="primary"
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
    }
}
</script>

