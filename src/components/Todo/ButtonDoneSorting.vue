<template>
  <v-btn @click="$store.commit('toggleSort')"
  class="button-done-sorting"
  color="primary"
  >
      Done Sorting
  </v-btn>
</template>

<script>
export default {

}
</script>

<style scoped>

.button-done-sorting{
  position:fixed;
  bottom:20px;
  left:59%;
  right:40%;
  transform:translate(-50%);
}
</style>