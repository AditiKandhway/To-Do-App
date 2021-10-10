import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'
Vue.use(Vuex)
let db=new Localbase('db');
export default new Vuex.Store({
  state: {
    search:null,
    tasks:[
        // {
        //     id:1,
        //     title:'Wake up',
        //     done:false,
        //     duedate:'2021-10-7'
        // },
        // {
        //     id:2,
        //     title:'Project Article',
        //     done:false,
        //     duedate:'2021-10-9'
        // },
        // {
        //     id:3,
        //     title:'Project submission',
        //     done:false,
        //     duedate:null
        // }
    ],
    snackbar:{
        show:false,
        text:''
    },
    sorting:true
  },
  mutations: {
    addTask(state,new_tasks)
    {
        state.tasks.push(new_tasks);
    },
    doneTask(state,id)
    {
        let task=state.tasks.filter(task=>task.id===id)[0];
        task.done=!task.done;
    },
    deleteTask(state,id)
    {
        state.tasks=state.tasks.filter(task=>task.id!==id);
    },
    updateTask(state,payload)
    {
        let task=state.tasks.filter(task=>task.id===payload.id)[0];
        task.title=payload.new_title;
    },
    updateTaskDate(state,payload)
    {
         let task=state.tasks.filter(task=>task.id===payload.id)[0];
         task.duedate=payload.new_date;
    },
    searchTask(state,value)
    {
        state.search=value;
    },
    toggleSort(state)
    {
        state.sorting=!state.sorting
    },
    showSnackbar(state,text)
    {
        let timeout=0;
        if(state.snackbar.show)
        {
            state.snackbar.show=false;
            timeout=300;
        }
        setTimeout(()=>{
            state.snackbar.show=true
            state.snackbar.text=text
        },timeout);
    },
    hidesnackbar(state)
    {
        state.snackbar.show=false
    }
  },
  actions: {
      addTask({commit},newTaskTitle){
        let new_tasks={
            id:Date.now(),
            title:newTaskTitle,
            done:false,
            duedate:null
        }
        // localbase returns a promise
        db.collection('tasks').add(new_tasks).then(()=>{
            commit('addTask',new_tasks)
            commit('showSnackbar','Task Added');
        })
      },
      deleteTask({commit},id)
      {
          commit('deleteTask',id);
          commit('showSnackbar','Task Deleted');
      },
      updateTask({commit},payload)
      {
          commit('updateTask',payload);
          commit('showSnackbar','Task Updated');
      },
      updateTaskDate({commit},payload)
      {
          commit('updateTaskDate',payload);
          commit('showSnackbar','Date Updated');
      }
  },
  getters:{
     taskFiltered(state)  {
        if(!state.search)
        {
            return state.tasks
        }
       return state.tasks.filter(task=>task.title.toLowerCase().includes(state.search.toLowerCase())
      )}
  },
  modules: {
  }
})
