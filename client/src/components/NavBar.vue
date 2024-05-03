<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { type User, getUsers } from "@/model/users"
import { refSession, useLogin} from '@/viewModel/session';

const { logout } = useLogin();

const session = refSession();

const users = ref([] as User[])

getUsers()
        .then((data) => users.value = data.slice(0, 5))
        .catch((error) => console.error(error));
    ;
 
let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;

}
 

</script>
<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="container">
          <div class="navbar-brand">
              <a class="navbar-item" href="/">
                  <img src="@/assets/DevnessLogoFINAL.png" width="90" height="80" />
              </a>
              <a role="button" class="navbar-burger" @click="toggleMenu" :class="{ 'is-active': isActive }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>
          <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
              <div class="navbar-start">
                  <RouterLink to="/myactivity" class="navbar-item">My Activity</RouterLink>
                  <RouterLink to="/statistics" class="navbar-item">Statistics</RouterLink>
                  <RouterLink to="/friendsactivity" class="navbar-item">Friends Activity</RouterLink>
                  <RouterLink to="/friends" class="navbar-item">Friends</RouterLink>
                  <RouterLink v-if="!session.user" to="/login" class="navbar-item">Login</RouterLink>
                  <div class="navbar-item has-dropdown is-hoverable" v-if="session.user?.isAdmin">
                      <a class="navbar-link">Admin</a>
                      <div class="navbar-dropdown">
                          <RouterLink to="/users" class="navbar-item">Users</RouterLink>
                      </div>
                  </div>
              </div>
              <div class="navbar-end">
        <div class="navbar-item user-info" v-if="session.user">
            <span class="user-email">{{ session.user.email }}</span>
            <button class="button is-danger" @click="logout">Logout</button>
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
.user-info {
        display: flex;
        align-items: center;
        gap: 1em;
    }
.user-email {
    margin-right: 0.5em;
}

</style>
