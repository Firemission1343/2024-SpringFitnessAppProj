<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { refSession } from './viewModel/session';
import { type User } from "@/model/users"
import { TheID } from './viewModel/user';

</script>


<template>
  <NavBar :user="User"/>
      <div class="container">
    <RouterView />
        <h1> App.vue myUser: {{  }} </h1>
        <h1> App.vue TheID: {{ TheID }} </h1>
  </div>

</template>
<style scoped>
</style>