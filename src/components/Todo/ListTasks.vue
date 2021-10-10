<template>
    <v-list class="pa-0" 
      flat
    >
    <draggable tag="ul" :list="$store.getters.taskFiltered" handle=".handle">
        <Task
            v-for="task in $store.getters.taskFiltered" :key="task.id"
            :task="task"
        />
      </draggable>
    </v-list>
</template>

<script>
import Task from '@/components/Todo/Task.vue';
import draggable from 'vuedraggable'
export default {
    name:'ListTasks',
    components:{
        Task:Task,
        draggable
    }
}
</script>

<style>

</style>