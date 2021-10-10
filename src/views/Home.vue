<template>
   <div class="pa-6">
    
  

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
  import ListTasks from '@/components/Todo/ListTasks.vue';
  import NoTasks from '@/components/Todo/no-tasks.vue';
  import ButtonDoneSorting from '@/components/Todo/ButtonDoneSorting.vue'
export default{
    name:'Home',
    components:{
      ListTasks:ListTasks,
      NoTasks:NoTasks,
      ButtonDoneSorting:ButtonDoneSorting
    }
}
</script>
