<script setup lang="ts">
import { getUsers, type User } from '@/model/users';
import { refSession, useLogin } from '@/viewModel/session';
import { ref } from 'vue';

const session = refSession();
const users = ref([] as User[])
getUsers()
  .then((data) => users.value = data.slice(0, 5))
  .catch((error) => console.error(error));
;
// const users = getUsers().slice(0, 5);
const { login, logout } = useLogin();

function doLogin(user: User) {
login(user);}

function doLogout() {
logout();
}

</script>

<template>

        <div class="badge" v-if="session.user">
            <img :src="session.user.image" alt="avatar" />
            <div> 
            {{ session.user.firstName }} {{ session.user.lastName}}
            {{ session.user.email }}
            </div>
            <div class="button is-danger is-link" @click.prevent="doLogout">
                Logout
            </div>

        </div>

            <div class= "buttons" v-else>   
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in 
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
             Login 
            </a>

          <div class="navbar-dropdown">
            <a v-for="user in users" class="navbar-item" @click="doLogin(user)" >
                 {{ user.firstName }} {{ user.lastName }}
                 </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>


        </div>

</template>

<style scoped>
.badge {
    display: flex;
    align-items: center;
    gap: 1rem;
    line-height: 1em;
}
.badge img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
}
</style>