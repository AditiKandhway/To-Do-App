import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter)


const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    }
]

const router=new VueRouter({
    mode:'history',
    routes
});

// this function is fired whenever the router is loaded and it can be added for displaying the link.
router.beforeEach((to,from,next)=>{
    document.title=`To Do App -- ${to.name}`
    next()
})
export default router