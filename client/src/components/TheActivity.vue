<script setup lang="ts">
import { ref,defineEmits } from "vue";
import { type User, getUsers } from "@/model/users";
import { type Workout, type UserWorkout, getWorkouts, getUserWorkouts } from "@/model/workouts";
import { refSession,useDeleteWorkout } from '@/viewModel/session';



const emit = defineEmits(['workout-deleted']);

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


const { delete: deleteWorkout } = useDeleteWorkout();

async function doDeleteWorkout(id: number, workout_id: number) {
  deleteWorkout(id, workout_id)
    .then(() => {
      return getUserWorkouts();
    })
    .then((data) => {
      userWorkouts.value = data;
      emit('workout-deleted'); // Emit an event after the delete operation is fully completed
    })
    .catch((error) => console.error(error));
}

</script>

<template>
  <div>
    <div v-for="workout in workouts" :key="workout.id">
      <div v-if="session.user?.id === workout.id">

        <div v-for="(userWorkout, index) in workout.UserWorkout" :key="index">

        <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="session.user.thumbnail" alt="" />           
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ session.user.firstName }}</strong> <small>@{{ session.user.handle }}</small> <small>just now</small>
          <br />
          {{ userWorkout.name }} @ {{ userWorkout.weight }} lbs
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
    <div class="media-right">
      <button class="button is-danger is-rounded"@click="doDeleteWorkout(workout.id, userWorkout.workout_id)">Delete</button>    </div>
  </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-left {
  text-align: left;
}
.article {
display: flex;
}
.box {
  margin-top: 20px;
}
.media-content {
  display: flex;
  justify-content: space-between;
}
.media-content .title {
  font-size: 1.5rem;
}
.media-content .subtitle {
  font-size: 1rem;
}
</style>