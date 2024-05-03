<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { refSession } from '@/viewModel/session';
import TheStats from "@/components/TheStats.vue";


const session = refSession();

const users = ref([] as User[])
getUsers()
    .then((data) => users.value = data.slice(0, 5))
    .catch((error) => console.error(error));
;


</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
  />  

  <main class="section">
    <div class="container">
      <div class="box">
        <h1 class="title has-text-centered">My Stats</h1>
        <div v-if="session.user && session.user.id > 0">
          <div v-for="user in users" :key="user.id">
            <div v-if="user.id === session.user?.id">
              <TheStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
