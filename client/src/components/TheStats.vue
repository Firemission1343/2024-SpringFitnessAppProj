<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { type Workout, type UserWorkout, getWorkouts, getUserWorkouts } from "@/model/workouts";
import { refSession } from "@/viewModel/session";

const session = refSession();

const users = ref([] as User[])
getUsers()
    .then((data) => users.value = data)
    .catch((error) => console.error(error));
 
const workouts = ref([] as Workout[])
getWorkouts()
    .then((data) => {
      workouts.value = data;
      session.workout = workouts.value[0];
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
  <main class="hero is-large">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-full">
          <div v-for="workout in workouts" :key="workout.id">
            <div v-if="session.user?.id === workout.id">
              <div v-for="(userWorkout, index) in workout.UserWorkout" :key="index">
                <div class="box">
                  <h2 class="title">Workout: {{ userWorkout.workout_id }}</h2>
                  <h3 class="subtitle">Workout Type: {{ userWorkout.name }}</h3>
                  <div class="columns is-multiline">
                    <div class="column is-half">
                      <h3 class="value">{{ userWorkout.sets }}</h3>
                      <caption class="caption">Sets</caption>
                    </div>
                    <div class="column is-half">
                      <h3 class="value">{{ userWorkout.reps }}</h3>
                      <caption class="caption">Reps</caption>
                    </div>
                    <div class="column is-half">
                      <h3 class="value">{{ userWorkout.weight }}</h3>
                      <caption class="caption">Weight</caption>
                    </div>
                    <div class="column is-half">
                      <h3 class="value">{{ userWorkout.calories }}</h3>
                      <caption class="caption">Calories</caption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

