<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { refSession } from '@/viewModel/session';
import FriendActivity from "@/components/FriendActivity.vue";

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

const visible = ref(users.value.map(() => true)); //not working as intended

const hideMediaBox = (index: number) => {
  visible.value[index] = false;

};

</script>

<template>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
    />  
    <main class="">
    <div class="">
      <div class="container">
        <h1 class="title">Friends Activity</h1>


          


        <!-- <div v-if="session.user?.id === -1">
          <h1 class="title">login</h1>
          <p>
            Please login to view your activity, using the login menu in the top
            right
          </p>
        </div> -->

        <div v-for="user in users" :key="user.id">
            <div v-if="session.user?.id === user.id">
              <FriendActivity />
            </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style>

</style>
