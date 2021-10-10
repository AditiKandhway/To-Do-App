<template>
   <v-text-field
        class="expanding-search mt-2 mr-10"
        :value="$store.state.search"
        @blur="searchField=true"
        @focus="searchField=false"
        @input="$store.commit('searchTask',$event)"
        :class="{'closed':searchField && !$store.state.search}"
        placeholder="Search"
        filled
        :disabled="$store.state.sorting"
        prepend-inner-icon="mdi-magnify"
        dense
        clearable
        >
   </v-text-field>
</template>

<script>
export default {
   data()
   {
       return{
           search:null,
           searchField:true
       }
   }
}
</script>

<style>
    .expanding-search .v-input__slot::before{
         border-color:transparent !important
    }
    .expanding-search .v-input__slot::after{
         border-color:transparent !important
    }
     .expanding-search .v-input__slot{
         background-color:transparent !important;
         cursor: pointer !important;
    }
    .closed{
        max-width:45px !important;
        transition:max-width 0.3s;
    }
</style>