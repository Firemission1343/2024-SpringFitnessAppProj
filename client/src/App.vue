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
  <!-- <NavBar :user="User"/>
      <div class="container">
    <RouterView />
        <h1> App.vue myUser: {{  }} </h1>
        <h1> App.vue TheID: {{ TheID }} </h1>
  </div> -->
</div>
</template>
<style scoped>
wrapper {
  margin-right: 2rem;
}
</style>