<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { refSession } from '@/viewModel/session';
import TheStats from "@/components/TheStats.vue";
import TheActivity from "@/components/TheActivity.vue";


const session = refSession();

const users = ref([] as User[])
getUsers()
    .then((data) => users.value = data.slice(0, 5))
    .catch((error) => console.error(error));
;


const visible = ref(true);

const hideMediaBox = () => {
  visible.value = false;
};

</script>

<template>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
    />  

  <main class="">
    <div class="container">
      <div v-if="session.user?.id === -1" class="text-left">
        <h1 class="title">login</h1>
        <p>
          Please login to view your activity, using the login menu in the top
          right
        </p>
      </div>
      <div v-else>
        <h1 class="title">My Stats</h1>
      </div>

      <div v-if="session.user?.id === 1">
        <div v-for="user in users" :key="user.id">
           <div v-if="user.id === session.user?.id">
            <TheStats />
          </div>
        </div>
      </div>

      <div v-if="session.user?.id === 2">
        <div v-for="user in users" :key="user.id">
           <div v-if="user.id === session.user?.id">
            <TheStats />
          </div>
        </div>
      </div>


      <div v-if="session.user?.id === 3">
        <div v-for="user in users" :key="user.id">
           <div v-if="user.id === session.user?.id">
            <TheStats />
          </div>
        </div>
      </div>

      </div>


   </main>
</template>
