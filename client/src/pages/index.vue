<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { type User, getUsers } from "@/model/users";
import NavBar from "@/components/NavBar.vue";

const users = ref([] as User[]);
// const myVariable = inject<User | null>('myVariable', null);
users.value = getUsers();

const currentID = inject("currentID");

const visible = ref(true);

const hideMediaBox = () => {
  visible.value = false;
};
// const myVariable = inject('myVariable.');
// myVariable.value = { id: 1 }
</script>


<template>
  <main class="hero  is-large">
    <div v-if="currentID === -1"> 
    <h1 class="title">Statistics</h1>
            <p>Please Login!</p>
    </div>
    <div class="container boxes d-flex">

      <div class="columns boxes">
        <div class="column is-one-quarter">
          <!-- "Left: " -->
          
        </div>
        <!-- Middle:   -->
        <div class="column is-half">
          <div class="colunm  is-flex d-flex"> 

            <div v-if="currentID === 1">
            <div class="d-flex boxes" v-for="user in users" :key="user.id">
              <!-- <h1> {{ users }} </h1> -->
              <div v-if="user.id === 1">
            <div class="box half-screen">
              <h2 class="title">Today</h2>
              <h3 class="subtitle">Workout Type: {{ user.workout.name }} </h3>

              <div class="columns is-multiline boxes">

                <div class="column is-half">
                  <h3 class="value">{{ user.workout.sets }}</h3>
                  <caption class="caption">Sets</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">{{ user.workout.reps }}</h3>
                  <caption class="caption">Reps</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">{{ user.workout.weight }}</h3>
                  <caption class="caption">Weight</caption>
                </div>
                  <div class="column is-half"><h3 class="value">281.5</h3>
                    <caption class="caption">Calories</caption>
                  </div>

                </div>
              </div>

              <div class="box">
              <h2 class="title">Week</h2>
              <h3 class="subtitle">Workout Type: {{ user.workout.name }} </h3>

              <div class="columns is-multiline">

                <div class="column is-half">
                  <h3 class="value">{{ user.workout.sets }}</h3>
                  <caption class="caption">Sets</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">{{ user.workout.reps }}</h3>
                  <caption class="caption">Reps</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">{{ user.workout.weight }}</h3>
                  <caption class="caption">Weight</caption>
                </div>
                  <div class="column is-half"><h3 class="value">281.5</h3>
                    <caption class="caption">Calories</caption>
                  </div>

                </div>
              </div>


              <div class="box">
              <h2 class="title">All time</h2>
              <h3 class="subtitle">Workout Type: {{ user.workout.name }} </h3>

              <div class="columns is-multiline">

                <div class="column is-half">
                  <h3 class="value">{{ user.workout.sets }}</h3>
                  <caption class="caption">Sets</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">{{ user.workout.reps }}</h3>
                  <caption class="caption">Reps</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">{{ user.workout.weight }}</h3>
                  <caption class="caption">Weight</caption>
                </div>
                  <div class="column is-half"><h3 class="value">281.5</h3>
                    <caption class="caption">Calories</caption>
                  </div>

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
    
  </main>
</template>

<style scoped>

.half-screen {
  width: 50vw; /* 50% of the viewport width */
}
.d-flex {
  display: flex;
}

.user {
  width: 100%; /* Adjust this value as needed */
}

.flex-column {
  flex-direction: column;
}


</style>

