
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mobile-breakpoint="768"
      app
    >
    <v-img
      height="170"
      class="pa-4 pt-7"
      src="@/assets/mountains.jpg"
      gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
    <v-avatar size="70" class="mb-2">
        <img
          src="@/assets/mountains.jpg"
          alt="Aditi Kandhway"
        >
    </v-avatar>
    <div class="white--text text-subtitle-1 font-weight-bold">
      Aditi Kandhway
    </div>
      <div class="white--text text-subtitle-2">
      aditi_kandhway
    </div>
    </v-img>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
           :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      src="@/assets/mountains.jpg"
      shrink-on-scroll
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      
      <v-container class="pa-0 heading-style">
         <v-row>
              <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
                 <v-spacer></v-spacer>
              <Search/>
          </v-row>
          <v-row>
             <v-toolbar-title class="ml-4 text-h4">
                    To Do App
            </v-toolbar-title>
          </v-row>
          <v-row >
             <LiveDateTime/>
          </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
     <router-view></router-view>
     <Snackbar/>
    </v-main>
  </v-app>
</template>

<script>
import snackbar from '@/components/shared/Snackbar.vue';
import Search from '@/components/Tools/Search.vue';
import LiveDateTime from '@/components/Tools/Live-Date-Time.vue';
  export default {
    data: () => ({ drawer: null,
    items: [
          { title: 'Todo', icon: 'mdi-format-list-checks',to:'/' },
          { title: 'About', icon: 'mdi-help-box', to:'/about'},
        ],
    }),
    components:{
      Snackbar:snackbar,
      Search:Search,
      LiveDateTime:LiveDateTime
    },
    mounted()
    {
      this.$store.dispatch('getTasks');
    }
  }
</script>

<style scoped>
.heading-style{
  max-width:none !important
}
</style>