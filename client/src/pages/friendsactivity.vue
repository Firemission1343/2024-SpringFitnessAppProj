<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { TheID } from "@/viewModel/user";
import FriendActivity from "@/components/FriendActivity.vue";

const users = ref([] as User[]);
users.value = getUsers();

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

        <button class="button is-info is-fullwidth" @click="toggleMenu" 
          :class="{ 'is-active': isActive } ">Add Workout</button>
          
          <form v-show="isActive" action="" >
              <div class="field">
                <label class="label">Exercise Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Exercise Name">
                </div>
              </div>

              <div class="field">
                <label class="label">Sets</label>
                <div class="control">
                  <input class="input" type="number" placeholder="Sets">
                </div>
              </div>

              <div class="field">
                <label class="label">Reps</label>
                <div class="control">
                  <input class="input" type="number" placeholder="Reps">
                </div>
              </div>

              <div class="field">
                <label class="label">Calories</label>
                <div class="control">
                  <input class="input" type="number" placeholder="Calories">
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
              </div>
          </form>

        <div v-if="TheID === -1">
          <h1 class="title">login</h1>
          <p>
            Please login to view your activity, using the login menu in the top
            right
          </p>
        </div>
        <div v-else-if="TheID === 1">
            <FriendActivity /> 
        </div>

        <div v-else-if="TheID === 2">
          <FriendActivity />
        </div>

        <div v-else-if="TheID === 3">
           <FriendActivity />

        </div>
      </div>
    </div>
  </main>
</template>

<style>

</style>
