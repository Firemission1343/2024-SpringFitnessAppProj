<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { type User, getUsers } from "@/model/users"
// import { refUsers, refCurrentID, TheID, myUser, setID  } from '@/viewModel/user';

// const users =refUsers();

// users.value = getUsers();

 
let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;

}
 

</script>

<template>

<nav class="navbar is-primary is-flex is-centered"  role="navigation" aria-label="main navigation">

    
<div class="container is-full is-centered">

<div class="navbar-brand is-centered">
  <a class="navbar-item is-centered" href="/">
    <img
    src="@/assets/DevnessLogoFINAL.png"      
      width="90"
      height="80"
    />
  </a>

  <RouterLink to="/myactivity" class="navbar-item">  My Activity </RouterLink>

  <RouterLink to="/statistics" class="navbar-item"> Statistics </RouterLink>

  <RouterLink to="/friendsactivity" class="navbar-item">  Friends Activity </RouterLink>

</div>

<a
    role="button" 
    @click="toggleMenu" 
    :class="{ 'is-active': isActive } "
    class="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample">

    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>

<div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive } ">
  <div class="navbar-start">

    <RouterLink to="/peoplesearch" class="navbar-item">  People Search </RouterLink>


    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link"> Admin </a>

      <div class="navbar-dropdown">
        <RouterLink to="/users" class="navbar-item"> Users </RouterLink>
      </div>
    </div>
  </div>


  <div class="navbar-end">

<div class="navbar-item">
  <div class="buttons">

  </div>  
</div>

<div class="navbar-item">
  <LoginBadge />

</div>
</div>
</div>
</div>
</nav>
</template>

<style scoped>
.router-link-active {
    border-bottom: 2px solid #00d1b2;
}

</style>
