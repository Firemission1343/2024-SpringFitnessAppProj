<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { type Workout, type UserWorkout, getWorkouts, getUserWorkouts } from "@/model/workouts";
import { refSession } from "@/viewModel/session";
import TheStats from "@/components/TheStats.vue";
import FriendActivity from "@/components/FriendActivity.vue";

const session = refSession();

const users = ref([] as User[])

getUsers()
    .then((data) => users.value = data)
    .catch((error) => console.error(error));

const workouts = ref([] as Workout[])
getWorkouts()
    .then((data) => {
      workouts.value = data;
    })
    .catch((error) => console.error(error));
  

const userWorkouts = ref([] as UserWorkout[])
getUserWorkouts()
.then((data) => {
       userWorkouts.value = data;

      console.log(userWorkouts.value); // Log the user workouts to the console for debugging

      return userWorkouts.value;
    })
    .catch((error) => console.error(error));

    
const visible = ref(true);

const hideMediaBox = () => {
  visible.value = false;
};
 
</script>

<template>
  <main class="section">
    <div class="container">
      <h1 class="title has-text-centered">Your Home</h1>
      <div class="columns is-multiline">
        <div class="column is-three-quarters">
          <div v-for="workout in workouts" :key="workout.id">
            <div v-if="session.user?.id === workout.id">
              <div class="box">
                <TheStats />
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="box">
            <h2 class="subtitle">Friend Activity</h2>
            <FriendActivity />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>

.half-screen {
  width: 50vw; 
}
.d-flex {
  display: flex;
}

.user {
  width: 100%; 
}

.flex-column {
  flex-direction: column;
}


</style>

