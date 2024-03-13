<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { refUsers, TheID, myUser, setID  } from '@/viewModel/user';
import TheActivity from "@/components/TheActivity.vue";

const users = ref([] as User[]);
users.value = getUsers();

const visible = ref(true);

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
// console.log({ isActive: isActive.value });
}

  const hideMediaBox = () => {
  visible.value = false;

};


</script>

<template>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
    />  
  <main class="hero is-large">
    <div class="container">
      <div v-if="TheID === -1" class="text-left">
        <h1 class="title">login</h1>
        <p>
          Please login to view your activity, using the login menu in the top
          right
        </p>
      </div>
      <div v-else>
        <h1 class="title">My Activity</h1>
      </div>
      <div v-if="TheID !== -1" class="columns">
        <!-- <div class="column is-one-quarter">/div> -->

        <!-- Middle:   -->
        <div class="column is-full media">
          <button @click="toggleMenu" 
          :class="{ 'is-active': isActive } " class="button is-info is-fullwidth">Add Workout</button>
          
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

          <div v-if="TheID === 1">
            <TheActivity />
          </div>

          <div v-if="TheID === 2">
            <TheActivity />
          </div>

          <div v-if="TheID === 3">
            <TheActivity />
          </div>
        </div>

        <div class="column is-one-quarter"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
