<template>
  
      <div>
        <v-list-item @click="$store.commit('doneTask',task.id)"
         :class="{'light-blue lighten-5':task.done}"
         :ripple="false"
         >
          <template>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{'text-decoration-line-through':task.done}">{{task.title}}</v-list-item-title>
            </v-list-item-content>
             <v-list-item-action>
                <v-list-item-action-text v-if="task.duedate">
                  <v-icon small  color="primary">
                  mdi-calendar
                </v-icon>
                  {{task.duedate | newDate}}
                  </v-list-item-action-text>
              </v-list-item-action>
          </template>
            <v-list-item-action>
          <!-- <v-btn @click.stop="dialogs.delete=true" icon>
            <v-icon color="primary">mdi-delete</v-icon>
          </v-btn> -->
          <TaskMenu
          :task="task"
          />
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn
                icon 
                class="handle"
                >
                <v-icon  color="primary">mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
        </v-list-item>
         <v-divider>
          </v-divider>
      </div>
</template>

<script>


import TaskMenu from '@/components/Todo/TaskMenu.vue';
import {format} from 'date-fns'
export default {
    name:'Task',
    props:['task'],
    components:{
      TaskMenu:TaskMenu
    },
    filters:{
      newDate(value)
      {
          return format(new Date(value),'MMM d')
      }
    }
}
</script>

<style scoped>
  .sortable-ghost{
    opacity:0
  }
  .sortable-drag{
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }
</style>