<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";
import { type Workout, type UserWorkout, getWorkouts, getUserWorkouts } from "@/model/workouts";
import { refSession } from '@/viewModel/session';

const session = refSession();

const users = ref([] as User[])

getUsers()
    .then((data) => users.value = data)
    .catch((error) => console.error(error));
    
const workouts = ref([] as Workout[])
getWorkouts()
    .then((data) => {
      workouts.value = data.map(workout => ({ ...workout, visible: true })); // Add a visible property to each workout
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


    const hideMediaBox = (workoutId: number, userId: number) => {
  const workout = workouts.value.find(workout => workout.id === workoutId);
  if (workout && workout.id === userId) {
    workout.visible = false;
  }
};

</script>

<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <div v-for="friendId in session.user?.friends" :key="friendId">
        <div v-if="friendId === user.id">
          <div v-for="workout in workouts" :key="workout.id">
            <div v-if="workout.id === user.id && workout.visible"> 
              <div v-for="(userWorkout, index) in workout.UserWorkout" :key="index">
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
                        {{ userWorkout.name }} @ {{ userWorkout.weight }} lbs
                        <br>
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
                    <button class="delete" @click="hideMediaBox(workout.id, user.id)"></button> 
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.article {
  margin: 10px;
  padding: 10px;
}
</style>