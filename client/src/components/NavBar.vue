<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
// console.log({ isActive: isActive.value });
}

</script>

<template>

  <nav class="navbar is-primary is-flex is-centered"  role="navigation" aria-label="main navigation">

    
    <div class="container is-full is-centered">

    <div class="navbar-brand is-centered">
      <a class="navbar-item is-centered" href="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <RouterLink to="/myactivity" class="navbar-item">  My Activity </RouterLink>

      <RouterLink to="/statistics" class="navbar-item"> Statistics </RouterLink>

      <RouterLink to="/friendactivity" class="navbar-item">  Friend Activity </RouterLink>

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

        <RouterLink to="/PeopleSearch" class="navbar-item">  People Search </RouterLink>


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

            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                    <a class="button is-primary">
                      <strong>Log in</strong>
                    </a>
                    
                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="#user1">
                            User1
                        </a>

                        <a class="navbar-item" href="#user2">
                            User2
                        </a>

                        <a class="navbar-item" href="#user3">
                            User3
                        </a>
                        <a class="navbar-item" href="#other">
                            Other
                        </a>
                    </div>
              </div>


          </div>
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
