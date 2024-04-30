<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { type Workout, type UserWorkout, getWorkouts, getUserWorkouts } from "@/model/workouts";
import { refSession } from "@/viewModel/session";
import TheStats from "@/components/TheStats.vue";

const session = refSession();

const users = ref([] as User[])

getUsers()
        .then((data) => users.value = data.slice(0, 5))
        .catch((error) => console.error(error));
    ;
 
const workouts = ref([] as Workout[])
getWorkouts()
    .then((data) => {
      workouts.value = data.slice(0, 5);
      // session.workout = workouts.value[0];
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
  <main class="">
    <h1 class="title">Your Home</h1>

    <div class="container boxes d-flex">
      <div class="columns boxes">
        <!-- "Left: " -->
      </div>
      <!-- Middle:   -->
      <div class="column is-half">
        <div class="colunm "> 
          <!-- <div v-for="user in users" :key="user.id"> -->
            <div v-for="workout in workouts" :key="workout.id">
              <div v-if="session.user?.id === workout.id">
                {{ workout }}
                <br>
                <br>
                {{ workout.UserWorkout}}

                <TheStats />
              </div>
            </div>
    
          <!-- </div> -->
        </div>
        <!-- Right:  -->
        <div class="column is-one-quarter">
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

