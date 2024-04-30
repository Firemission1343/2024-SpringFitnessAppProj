<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
// import { refSession } from './viewModel/session';
// import { type User } from "@/model/users"
// import { TheID } from './viewModel/user';

</script>


<template>
  <div class="wrapper">  
  <NavBar />
  <div class="container">
    <RouterView />
  </div>
</div>
</template>
<style scoped>
wrapper {
  margin-right: 2rem;
}
</style>