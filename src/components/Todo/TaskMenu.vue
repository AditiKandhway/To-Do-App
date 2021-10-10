<template>
<div>
  <v-menu
    bottom
    left
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
        icon
        v-bind="attrs"
        v-on="on"
        >
        <v-icon  color="primary">mdi-dots-vertical</v-icon>
        </v-btn>
    </template>

    <v-list>
        <v-list-item
        v-for="(item, index) in items"
        :key="index"
        >
        <v-list-item-icon >
             <v-icon v-text="item.icon">
            </v-icon>
        </v-list-item-icon>
        <v-list-item-title @click="handlesclick(index)"
        style="cursor:pointer;">
            {{ item.title }}
            </v-list-item-title>
        </v-list-item>
    </v-list>
   </v-menu>
   <DialogEdit v-if="dialogs.edit"
   @close="dialogs.edit=false"
   :task="task"/>
   <DialogDate v-if="dialogs.date"
   @close="dialogs.date=false"
   :task="task"
   />
    <DialogDelete v-if="dialogs.delete" 
           @close="dialogs.delete=false"
           :task="task"/>
    </div>
</template>

<script>
import Dialog from '@/components/Dialogs/DeleteDialog.vue';
import DialogEdit from '@/components/Dialogs/DeleteEdit.vue';
import DateDialog from '@/components/Dialogs/DateDialog.vue';
export default {
      props:['task'],
      data: () => ({
        dialogs:{
            delete:false,
            edit:false,
            date:false
      },
      items: [
        { 
            title: 'Edit',
            icon: 'mdi-pencil-outline',
            click()
            {
               this.dialogs.edit=true;
            }
        },
        { 
            title: 'Due Date',
            icon: 'mdi-calendar',
            click()
            {
                this.dialogs.date=true;
            }
        },
        {
            title: 'Delete',
            icon:'mdi-delete',
            click()
            {
                this.dialogs.delete=true
            }
        },
        {
            title:'Sort',
            icon:'mdi-drag-horizontal-variant',
            click()
            {
                this.$store.commit('toggleSort');
            }
        }
      ],
    }),
    methods:{
        handlesclick(index)
        {
            // to get this of main object not the object inside the click function
            this.items[index].click.call(this);
        }
    },
    components:{
        DialogDelete:Dialog,
        DialogEdit:DialogEdit,
        DialogDate:DateDialog
    }

}
</script>

<style>

</style>