<script setup lang="ts">
import { ref, computed } from 'vue'
import { type User, getUsers } from "@/model/users"

const user =ref([] as User[]);

user.value = getUsers();

</script>


<template>
  <main class="hero  is-large">

    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <!-- "Left: " -->
          
        </div>
        <!-- Middle:   -->
        <div class="column is-half">
          <div class="colunm"> 

            <div class="box has-text-success summary">
              <h2 class="title">Today</h2>
              <div class="columns is-multiline">

                <div class="column is-half">
                  <h3 class="value">1.0 mi</h3>
                  <caption class="caption">Distance</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">0:30</h3>
                  <caption class="caption">Duration</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">2.0 mph</h3>
                  <caption class="caption">Avg Pace</caption>
                </div>
                  <div class="column is-half"><h3 class="value">281.5</h3>
                    <caption class="caption">Calories</caption>
                  </div>

                </div>
              </div>

              <div class="box has-text-success summary">
              <h2 class="title">Week</h2>
              <div class="columns is-multiline">

                <div class="column is-half">
                  <h3 class="value">1.0 mi</h3>
                  <caption class="caption">Distance</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">0:30</h3>
                  <caption class="caption">Duration</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">2.0 mph</h3>
                  <caption class="caption">Avg Pace</caption>
                </div>
                  <div class="column is-half"><h3 class="value">281.5</h3>
                    <caption class="caption">Calories</caption>
                  </div>

                </div>
              </div>


              <div class="box has-text-success summary">
              <h2 class="title">All time</h2>
              <div class="columns is-multiline">

                <div class="column is-half">
                  <h3 class="value">1.0 mi</h3>
                  <caption class="caption">Distance</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">0:30</h3>
                  <caption class="caption">Duration</caption>
                </div>
                <div class="column is-half">
                  <h3 class="value">2.0 mph</h3>
                  <caption class="caption">Avg Pace</caption>
                </div>
                  <div class="column is-half"><h3 class="value">281.5</h3>
                    <caption class="caption">Calories</caption>
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



</style>

