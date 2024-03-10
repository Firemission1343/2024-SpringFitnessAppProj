<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import { type User, getUsers } from "@/model/users"
import NavBar from '@/components/NavBar.vue';


const users =ref([] as User[]);
// const myVariable = inject<User | null>('myVariable', null);
users.value = getUsers();

const currentID = inject('currentID');


const visible = ref(true);

const hideMediaBox = () => {
  visible.value = false;
}
// const myVariable = inject('myVariable.');
// myVariable.value = { id: 1 }
</script>

<template>

  <main class="hero is-large">
    <div class="container">
      <h1 class="title">My Activity</h1>

      <div class="columns">
        <!-- <div class="column is-one-quarter">/div> -->

        <!-- Middle:   -->
        <div class="column is-half is-offset-one-quarter media">

          <button class="button is-info is-fullwidth">Add Workout</button>

          <!-- <h1> {{ myVariable?.value?.id }} </h1> -->

 
    
      <div v-if="currentID === 1" >
          <div v-for="user in users" :key="user.id">
                    <!-- <h1> {{ users }} </h1> -->
                    <div v-if="user.id === 1" > 

            <article class="media box" v-if="visible">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img :src="user.thumbnail" alt="">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ user.firstName }}</strong> &nbsp;
                    <small>{{ user.handle }}</small> &nbsp; 
                    <small>just now</small>
                    <br>
                    <div class="columns">
                      <div class="column has-text-centered" style="display: flex; justify-content: space-around; align-items: center;">
                        <div>
                          <div class="title" style="margin: 0px;">1.0 mi</div>
                          <div class="heading">Distance</div>
                        </div>
                        <div>
                          <div class="title" style="margin: 0px;">0:30</div>
                          <div class="heading">Duration</div>
                        </div>
                      </div>
                      <div class="column">
                      </div>
                    </div> Biked through campus - {
                          "lat": 41.7459793,
                          "lng": -74.082801
                        }     
                  </p></div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-reply"></i>
                        </span>
                      </a>
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-retweet"></i>
                          </span>
                        </a>
                          <a class="level-item">
                            <span class="icon is-small">
                              <i class="fas fa-heart"></i>
                            </span>
                          </a>

                    </div>
                  </nav>
              </div>
                            <div class="media-right">
                              <button class="delete" @click="hideMediaBox"></button>
                            </div>
            </article>
                    </div>
          </div>
        </div>



        <div v-if="currentID === 2" >
          <div v-for="user in users" :key="user.id">
                    <!-- <h1> {{ users }} </h1> -->
                    <div v-if="user.id === 2" > 

            <article class="media box" v-if="visible">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img :src="user.thumbnail" alt="">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ user.firstName }}</strong> &nbsp;
                    <small>{{ user.handle }}</small> &nbsp; 
                    <small>just now</small>
                    <br>
                    <div class="columns">
                      <div class="column has-text-centered" style="display: flex; justify-content: space-around; align-items: center;">
                        <div>
                          <div class="title" style="margin: 0px;">1.0 mi</div>
                          <div class="heading">Distance</div>
                        </div>
                        <div>
                          <div class="title" style="margin: 0px;">0:30</div>
                          <div class="heading">Duration</div>
                        </div>
                      </div>
                      <div class="column">
                      </div>
                    </div> Biked through campus - {
                          "lat": 41.7459793,
                          "lng": -74.082801
                        }     
                  </p></div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-reply"></i>
                        </span>
                      </a>
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-retweet"></i>
                          </span>
                        </a>
                          <a class="level-item">
                            <span class="icon is-small">
                              <i class="fas fa-heart"></i>
                            </span>
                          </a>

                    </div>
                  </nav>
              </div>
                            <div class="media-right">
                              <button class="delete" @click="hideMediaBox"></button>
                            </div>
            </article>
                    </div>
          </div>
        </div>


        <div v-if="currentID === 3" >
          <div v-for="user in users" :key="user.id">
                    <!-- <h1> {{ users }} </h1> -->
                    <div v-if="user.id === 3" > 

            <article class="media box" v-if="visible">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img :src="user.thumbnail" alt="">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ user.firstName }}</strong> &nbsp;
                    <small>{{ user.handle }}</small> &nbsp; 
                    <small>just now</small>
                    <br>
                    <div class="columns">
                      <div class="column has-text-centered" style="display: flex; justify-content: space-around; align-items: center;">
                        <div>
                          <div class="title" style="margin: 0px;">1.0 mi</div>
                          <div class="heading">Distance</div>
                        </div>
                        <div>
                          <div class="title" style="margin: 0px;">0:30</div>
                          <div class="heading">Duration</div>
                        </div>
                      </div>
                      <div class="column">
                      </div>
                    </div> Biked through campus - {
                          "lat": 41.7459793,
                          "lng": -74.082801
                        }     
                  </p></div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small">
                          <i class="fas fa-reply"></i>
                        </span>
                      </a>
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-retweet"></i>
                          </span>
                        </a>
                          <a class="level-item">
                            <span class="icon is-small">
                              <i class="fas fa-heart"></i>
                            </span>
                          </a>

                    </div>
                  </nav>
              </div>
                            <div class="media-right">
                              <button class="delete" @click="hideMediaBox"></button>
                            </div>
            </article>
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
