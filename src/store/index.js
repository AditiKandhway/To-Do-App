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
    sorting:false
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
    },
    setTask(state,tasks)
    {
        state.tasks=tasks
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
          db.collection('tasks').doc({id:id}).delete().then(()=>{
            commit('deleteTask',id);
            commit('showSnackbar','Task Deleted');
          })
      },
      updateTask({commit},payload)
      {
        db.collection('tasks').doc({id:payload.id}).update({
            title:payload.new_title
        }).then(()=>{
          commit('updateTask',payload);
          commit('showSnackbar','Task Updated');
        })
      },
      updateTaskDate({commit},payload)
      {
           console.log(payload.new_date);
            db.collection('tasks').doc({id:payload.id}).update({
                duedate:payload.new_date
            }).then(()=>{
                commit('updateTaskDate',payload);
                commit('showSnackbar','Date Updated');
            })
      },
      getTasks({commit})
      {
          db.collection('tasks').get().then(tasks=>{
              console.log(tasks);
              commit('setTask',tasks)
          })
      },
      doneTask({state,commit},id)
      {
          let task=state.tasks.filter(task=>task.id===id)[0];
          db.collection('tasks').doc({id:id}).update({
              done:!task.done
          }).then(()=>{
            commit('doneTask',id)
          })
      },
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
