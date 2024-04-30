<script setup lang="ts">
import { ref} from "vue";
import { type User, getUsers } from "@/model/users";
import { type Workout, type UserWorkout, getWorkouts, getUserWorkouts } from "@/model/workouts";
import { refSession } from '@/viewModel/session';

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
  <div>
    <div v-for="user in users" :key="user.id">
      <div v-if="user.id === session.user?.id">
        <div v-for="(workout, index) in session.workout?.UserWorkout" :key="index">

        <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="user.thumbnail" alt="" />           
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ user.firstName }}</strong> <small>@{{ user.handle }}</small> <small>just now</small>
          <br />
          {{ workout.name }} @ {{ workout.weight }} lbs
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
      <button class="delete"></button>
    </div>
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