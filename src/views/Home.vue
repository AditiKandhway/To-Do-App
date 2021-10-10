<template>
   <div class="pa-6">
    
   <FieldAddTasks/>

    <ListTasks 
       v-if="$store.state.tasks.length"
    />
     <NoTasks
       v-else
     />
     <ButtonDoneSorting/>
    </div>
</template>


<script>
  import FieldAddTasks from '@/components/Todo/FieldAddTasks.vue';
  import ListTasks from '@/components/Todo/ListTasks.vue';
  import NoTasks from '@/components/Todo/no-tasks.vue';
  import ButtonDoneSorting from '@/components/Todo/ButtonDoneSorting.vue'
export default{
    name:'Home',
    components:{
      FieldAddTasks:FieldAddTasks,
      ListTasks:ListTasks,
      NoTasks:NoTasks,
      ButtonDoneSorting:ButtonDoneSorting
    }
}
</script>
