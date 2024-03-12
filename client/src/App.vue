<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { ref, provide, computed, watch } from 'vue';
import { type User, getUsers } from "@/model/users"
import { TheID, myUser } from './viewModel/user';

const users =ref([] as User[]);
users.value = getUsers();


let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
// console.log({ isActive: isActive.value });
}
// provide('myVariable', myVariable);


</script>


<template>
  <NavBar :user="User"/>
      <div class="container">
    <RouterView />
        <h1> App.vue myID: {{ myUser }} </h1>
        <h1> App.vue TheID: {{ TheID }} </h1>
  </div>

</template>
<style scoped>
</style>