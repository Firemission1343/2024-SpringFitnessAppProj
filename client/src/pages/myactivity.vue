<script setup lang="ts">
import { ref } from "vue";
import { type User, getUsers } from "@/model/users";

import { refSession, useWorkout } from '@/viewModel/session';
import TheActivity from "@/components/TheActivity.vue";

const session = refSession();

const users = ref([] as User[])
getUsers()
    .then((data) => users.value = data.slice(0, 5))
    .catch((error) => console.error(error));
;

const visible = ref(true);

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
// console.log({ isActive: isActive.value });
}

const { doWorkout } = useWorkout();


const NewWorkout = ref({  // Define NewWorkout ref
  workout_id: 0,
  name: '',
  sets: 0,
  reps: 0,
  weight: "0",
  calories: 0,
});

function onSubmit(event: Event) {
    event.preventDefault();
    
    doWorkout(NewWorkout.value);
    NewWorkout.value = {
        workout_id: 0,
        name: '',
        sets: 0,
        reps: 0,
        weight: "0",
        calories: 0,
    };
}


</script>

<template>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
    />  
  <main>
    <div class="container">
      <div v-if="session.user?.id === -1" class="text-left">
        <h1 class="title">login</h1>
        <p>
          Please login to view your activity, using the login menu in the top
          right
        </p>
      </div>
      <div v-else>
        <h1 class="title">My Activity</h1>
      </div>
      <div v-if="session.user?.id !== -1" class="columns">
        <!-- <div class="column is-one-quarter">/div> -->

        <!-- Middle:   -->
        <div class="column is-full media">
          <button @click="toggleMenu" 
          :class="{ 'is-active': isActive } " class="button is-info is-fullwidth">Add Workout</button>
          
<!-- Your form code -->
<form v-show="isActive" @submit="onSubmit" class="add-workout-form">
    <div class="field">
        <label class="label">Exercise Name</label>
        <div class="control">
            <input type="text" id="name" v-model="NewWorkout.name" class="input">
        </div>
    </div>

    <div class="field">
        <label class="label">Sets</label>
        <div class="control">
            <input type="number" id="sets" v-model.number="NewWorkout.sets" class="input">
        </div>
    </div>

    <div class="field">
        <label class="label">Reps</label>
        <div class="control">
            <input type="number" id="reps" v-model.number="NewWorkout.reps" class="input">
        </div>
    </div>

    <div class="field">
        <label class="label">Weight</label>
        <div class="control">
            <input type="number" id="weight" v-model="NewWorkout.weight" class="input">
        </div>
    </div>

    <div class="field">
        <label class="label">Calories</label>
        <div class="control">
            <input type="number" id="calories" v-model.number="NewWorkout.calories" class="input">
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
    </div>
</form>

      
            <div v-for="user in users" :key="user.id">
            <div v-if="session.user?.id === user.id">
              <TheActivity />
            </div>
          </div>
        </div>

        <div class="column is-one-quarter"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
