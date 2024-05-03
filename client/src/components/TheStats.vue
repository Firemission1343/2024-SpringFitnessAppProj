<script setup lang="ts">
import { ref, computed } from "vue";
import { type User, getUsers } from "@/model/users";
import { type Workout, type UserWorkout, getWorkouts, getUserWorkouts } from "@/model/workouts";
import { refSession } from "@/viewModel/session";

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
  <main class="hero  is-large">
    <div class="container boxes d-flex">
      <div class="columns boxes">
        <div class="column is-one-quarter">
          <!-- "Left: " -->
        </div>
        <!-- Middle:   -->
        <div class="column is-half">
          <div class="colunm  is-flex d-flex"> 
            <div class="d-flex boxes"v-for="workout in workouts" :key="workout.id">
              <div v-if="session.user?.id === workout.id">

                <div v-for="(userWorkout, index) in workout.UserWorkout" :key="index">

                <div class="box half-screen">
                  <h2 class="title">Workout: {{ userWorkout.workout_id }}  </h2>
                  <h3 class="subtitle">Workout Type: {{ userWorkout.name }} </h3>
                  <div class="columns is-multiline boxes">
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

          <!-- Right:  -->
          <div class="column is-one-quarter">
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

