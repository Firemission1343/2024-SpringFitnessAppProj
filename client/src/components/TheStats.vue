<script setup lang="ts">
import { ref} from "vue";
import { type User, getUsers } from "@/model/users";
import {TheID } from '@/viewModel/user';

const users = ref([] as User[]);
 users.value = getUsers();
 

const visible = ref(true);

const hideMediaBox = () => {
  visible.value = false;
};

</script>


<template>
  <main class="hero  is-large">
    <div v-if="TheID === -1"> 
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

          <div class="d-flex boxes" v-for="user in users" :key="user.id">
            <div v-if="user.id === TheID">
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

